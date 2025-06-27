using Application.Commands;
using Application.Exceptions;
using Domain.Enums;
using Infrastructure.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Handlers
{
    public class ApproveLeadHandler : IRequestHandler<ApproveLeadCommand, Unit>
    {
        private readonly AppDbContext _context;

        public ApproveLeadHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(ApproveLeadCommand request, CancellationToken cancellationToken)
        {
            var lead = await _context.Leads
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (lead == null)
                throw new KeyNotFoundException("Lead not found.");

            if (lead.Status == LeadStatus.Accepted)
                throw new LeadAlreadyAcceptedException("This lead has already been accepted.");

            if (lead.Status == LeadStatus.Declined)
                throw new InvalidOperationException("Cannot accept a lead that has been declined.");

            if (lead.Price > 500)
            {
                lead.Price = Math.Round(lead.Price * 0.9m, 2);
            }

            lead.Status = LeadStatus.Accepted;

            try
            {
                await _context.SaveChangesAsync(cancellationToken);
            }
            catch (DbUpdateException ex)
            {
                throw new ApplicationException("Database error while accepting lead.", ex);
            }

            return Unit.Value;
        }
    }
}

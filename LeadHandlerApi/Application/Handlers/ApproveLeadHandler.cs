using Application.Commands;
using Domain.Enums;
using Infrastructure.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
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
            var lead = await _context.Leads.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken) ?? throw new KeyNotFoundException();
            lead.Status = LeadStatus.Accepted;

            await _context.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
    }
}

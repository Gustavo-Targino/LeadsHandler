using Application.Commands;
using Application.Exceptions;
using Domain.Enums;
using Infrastructure.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Handlers;

public class DeclineLeadHandler : IRequestHandler<DeclineLeadCommand, Unit>
{ 
    private readonly AppDbContext _context; 
    public DeclineLeadHandler(AppDbContext context) => _context = context; 
    public async Task<Unit> Handle(DeclineLeadCommand request, CancellationToken cancellationToken)
    {
        var lead = await _context.Leads.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
        
        if (lead == null)
            throw new LeadNotFoundException("Lead not found.");

        if (lead.Status == LeadStatus.Declined)
            throw new LeadAlreadyUpdatedException("This lead has already been declined.");

        if (lead.Status == LeadStatus.Accepted)
            throw new LeadAlreadyUpdatedException("Cannot decline a lead that has been accepted.");

        lead.Status = LeadStatus.Declined;

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
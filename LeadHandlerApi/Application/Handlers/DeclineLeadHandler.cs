using Application.Commands;
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
        if (lead == null) throw new KeyNotFoundException();

        lead.Status = LeadStatus.Declined;
        await _context.SaveChangesAsync(cancellationToken);
        return Unit.Value;
    }
}
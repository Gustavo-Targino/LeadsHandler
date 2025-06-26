using Application.Commands;
using Domain.Enums;
using Infrastructure.Persistence;
using Infrastructure.Services;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Handlers;

public class ApproveLeadHandler : IRequestHandler<ApproveLeadCommand, Unit> 
{ 
    private readonly AppDbContext _context; 
    private readonly IEmailService _email; 
    public ApproveLeadHandler(AppDbContext context, IEmailService email) 
    {
        _context = context;
        _email = email;
    }

    public async Task<Unit> Handle(ApproveLeadCommand request, CancellationToken cancellationToken)
    {
        var lead = await _context.Leads.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
        if (lead == null) throw new KeyNotFoundException();

        // apply discount if > 500
        if (lead.Price > 500)
            lead.Price = lead.Price * 0.9m;

        lead.Status = LeadStatus.Accepted;
        await _context.SaveChangesAsync(cancellationToken);

        // send notification
        await _email.SendAsync("vendas@test.com", "Lead Accepted", $"Lead {lead.Id} accepted.");
        return Unit.Value;
    }
}
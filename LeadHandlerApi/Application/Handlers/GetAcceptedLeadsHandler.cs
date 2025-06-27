using Application.DTOs;
using Application.Queries;
using Infrastructure.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Handlers;

public class GetAcceptedLeadsHandler : IRequestHandler<GetAcceptedLeadsQuery, IEnumerable<LeadDto>>
{
    private readonly AppDbContext _context;

    public GetAcceptedLeadsHandler(AppDbContext context) => _context = context;

    public async Task<IEnumerable<LeadDto>> Handle(GetAcceptedLeadsQuery request, CancellationToken cancellationToken)
    {
        return await _context.Leads
            .Where(x => x.Status == Domain.Enums.LeadStatus.Accepted)
            .Select(x => new LeadDto
            {
                Id = x.Id,
                ContactFirstName = x.ContactFirstName,
                ContactFullName = x.ContactFullName,
                ContactPhoneNumber = x.ContactPhoneNumber,
                ContactEmail = x.ContactEmail,
                DateCreated = x.DateCreated,
                Suburb = x.Suburb,
                Category = x.Category,
                Description = x.Description,
                Price = x.Price
            }).ToListAsync(cancellationToken);
    }
}

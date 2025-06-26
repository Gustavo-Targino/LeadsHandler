using Application.DTOs;
using Application.Queries;
using Infrastructure.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Handlers;  
public class GetPendingLeadsHandler : IRequestHandler<GetPendingLeadsQuery, IEnumerable<LeadDto>> { 
    
    private readonly AppDbContext _context; 
    
    public GetPendingLeadsHandler(AppDbContext context) => _context = context; 
    
    public async Task<IEnumerable<LeadDto>> Handle(GetPendingLeadsQuery request, CancellationToken cancellationToken)
    {
        return await _context.Leads
            .Where(x => x.Status == Domain.Enums.LeadStatus.Pending)
            .Select(x => new LeadDto
            {
                Id = x.Id,
                ContactFirstName = x.ContactFirstName,
                DateCreated = x.DateCreated,
                Suburb = x.Suburb,
                Category = x.Category,
                Description = x.Description,
                Price = x.Price
            }).ToListAsync(cancellationToken);
    }
}
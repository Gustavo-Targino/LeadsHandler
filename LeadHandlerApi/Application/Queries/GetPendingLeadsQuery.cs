using MediatR;
using System.Collections.Generic;
using Application.DTOs;
using System.Collections;

namespace Application.Queries;
public record GetPendingLeadsQuery() : IRequest<IEnumerable<LeadDto>>; 
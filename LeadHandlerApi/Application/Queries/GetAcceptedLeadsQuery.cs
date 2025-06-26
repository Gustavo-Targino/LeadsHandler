using MediatR;
using System.Collections.Generic;
using Application.DTOs;
using System.Collections;

namespace Application.Queries;
public record GetAcceptedLeadsQuery() : IRequest<IEnumerable<LeadDto>>; 
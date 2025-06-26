using MediatR;
using System;

namespace Application.Commands;
    
public record DeclineLeadCommand(Guid Id) :  IRequest<Unit>; 
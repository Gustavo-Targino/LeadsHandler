using MediatR;
using System;

namespace Application.Commands; 

public record ApproveLeadCommand(Guid Id) : IRequest<Unit>; 
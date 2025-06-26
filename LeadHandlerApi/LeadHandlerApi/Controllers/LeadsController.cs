using Application.Commands;
using Application.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.DTOs;

namespace API.Controllers { [ApiController][Route("api/[controller]")] public class LeadsController : ControllerBase { private readonly IMediator _mediator; public LeadsController(IMediator mediator) => _mediator = mediator; [HttpGet("pending")]
        public async Task<IEnumerable<LeadDto>> GetPending() =>
        await _mediator.Send(new GetPendingLeadsQuery());

        [HttpGet("accepted")]
        public async Task<IEnumerable<LeadDto>> GetAccepted() =>
            await _mediator.Send(new GetAcceptedLeadsQuery());

        [HttpPost("{id}/approve")]
        public async Task<IActionResult> Approve(Guid id)
        {
            await _mediator.Send(new ApproveLeadCommand(id));
            return NoContent();
        }

        [HttpPost("{id}/decline")]
        public async Task<IActionResult> Decline(Guid id)
        {
            await _mediator.Send(new DeclineLeadCommand(id));
            return NoContent();
        }
    }

}
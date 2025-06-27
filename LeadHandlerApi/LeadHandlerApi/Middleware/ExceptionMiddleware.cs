// API/Middleware/ExceptionMiddleware.cs
using Application.Exceptions;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Text.Json;

public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;

    public ExceptionMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            await Handle(context, ex);
        }
    }

    private static async Task Handle(HttpContext context, Exception ex)
    {
        var response = context.Response;
        response.ContentType = "application/json";

        response.StatusCode = ex switch
        {
            LeadAlreadyAcceptedException => (int)HttpStatusCode.BadRequest,
            InvalidOperationException => (int)HttpStatusCode.BadRequest,
            _ => (int)HttpStatusCode.InternalServerError
        };

        var result = JsonSerializer.Serialize(new { error = ex.Message });
        await response.WriteAsync(result);
    }
}

using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public interface IEmailService { Task SendAsync(string to, string subject, string body); }

    public class EmailServiceFake : IEmailService
    {
        public Task SendAsync(string to, string subject, string body)
        {
            // Fake: write to file or no-op
            // File.WriteAllText($"emails/{Guid.NewGuid()}.txt", $"To:{to}\nSubject:{subject}\n{body}");
            return Task.CompletedTask;
        }
    }
}
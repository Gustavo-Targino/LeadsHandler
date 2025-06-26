using Domain.Entities;
using Domain.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence;

public class AppDbContext : DbContext
{
    public DbSet<Lead> Leads { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Lead>(b =>
        {
            b.HasKey(x => x.Id);
            b.Property(x => x.Status)
                .HasConversion<int>()
                .HasDefaultValue(LeadStatus.Pending);
            b.Property(x => x.Price).HasColumnType("decimal(18,2)");
            b.Property(x => x.DateCreated).HasDefaultValueSql("GETUTCDATE()");
        });
    }
}

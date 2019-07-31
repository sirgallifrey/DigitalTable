using Microsoft.EntityFrameworkCore;
using DigitalTable.Domain.Entities;
using DigitalTable.Persistence.Configurations;

namespace DigitalTable.Persistence
{
    public class DigitalTableDbContext : DbContext
    {
        public DigitalTableDbContext(DbContextOptions<DigitalTableDbContext> options)
            : base(options)
        {
        }

        public DbSet<Entity> Entities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new EntityConfiguration());
        }
    }
}

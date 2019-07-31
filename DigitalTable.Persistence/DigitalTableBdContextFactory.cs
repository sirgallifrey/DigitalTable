using Microsoft.EntityFrameworkCore;
using DigitalTable.Persistence.Infrastructure;

namespace DigitalTable.Persistence
{
    public class DigitalTableDbContextFactory : DesignTimeDbContextFactoryBase<DigitalTableDbContext>
    {
        protected override DigitalTableDbContext CreateNewInstance(DbContextOptions<DigitalTableDbContext> options)
        {
            return new DigitalTableDbContext(options);
        }
    }
}
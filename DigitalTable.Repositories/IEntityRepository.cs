using System;
using System.Threading.Tasks;
using DigitalTable.Domain.Entities;

namespace DigitalTable.Repositories
{
	public interface IEntityRepository
	{
		Task<Entity> GetByID(int id);
		Task<Entity> GetByName(string name);
	}
}

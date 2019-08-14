using DigitalTable.Domain.Entities;
using DigitalTable.Web.Models.Entity;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace DigitalTable.Web.Services {
	public interface IEntityService {
		Task<Entity> GetEntity(int id);
		Task<List<Entity>> GetEntities();

		Task<Entity> CreateEntity(InsertEntity entity);

		Task<Entity> UpdateEntity(int id, UpdateEntity entity);
	}
}
using DigitalTable.Domain.Entities;
using DigitalTable.Web.Models.Character;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace DigitalTable.Web.Services {
	public interface ICharacterService {
		Task<Entity> GetCharacter(int id);
		Task<List<Entity>> GetCharacters();

		Task<Entity> CreateCharacter(UpsertCharacter character);

		Task<Entity> UpdateCharacter(int id, UpsertCharacter character);
	}
}
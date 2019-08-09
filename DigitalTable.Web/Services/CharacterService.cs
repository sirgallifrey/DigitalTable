using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using DigitalTable.Persistence;
using DigitalTable.Domain.Entities;
using DigitalTable.Web.Models.Character;
using AutoMapper;

namespace DigitalTable.Web.Services {
	public class CharacterService: ICharacterService {

		private DigitalTableDbContext _context;
		private IMapper _mapper;

		public CharacterService(DigitalTableDbContext context, IMapper mapper) {
			_context = context;
			_mapper = mapper;
		}
		public async Task<Entity> GetCharacter(int id) {
			return await _context.Entities
				.Where(e => e.Type == EntityType.Character && e.Id == id)
				.FirstOrDefaultAsync();
		}
		public async Task<List<Entity>> GetCharacters() {
			return await _context.Entities
				.Where(e => e.Type == EntityType.Character)
				.ToListAsync();
		}

		public async Task<Entity> CreateCharacter(UpsertCharacter character) {
			var entity = _mapper.Map<Entity>(character);
			_context.Entities.Add(entity);
			await _context.SaveChangesAsync();
			return entity;
		}

		public async Task<Entity> UpdateCharacter(int id, UpsertCharacter character) {
			var entity = await GetCharacter(id);
			if (entity != null) {
				entity.Name = character.Name;
				entity.Description = character.Description;
				entity.Properties = character.Properties;

				_context.Entities.Update(entity);

				// Save changes in database
				await _context.SaveChangesAsync();
			}
			return entity;
		}
	}
}
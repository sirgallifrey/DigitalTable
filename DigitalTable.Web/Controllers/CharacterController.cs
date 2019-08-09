using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DigitalTable.Domain.Entities;
using DigitalTable.Web.Models.Character;
using DigitalTable.Web.Services;


namespace DigitalTable.Web.Controllers
{
	[Route("api/character")]
	[ApiController]
	public class CharacterController : Controller
	{
		private ICharacterService _characterService;
		//private IEntityConverter _entityConverter;
		
		public CharacterController(ICharacterService characterService/* , IEntityConverter entityConverter*/)
		{
			_characterService = characterService;
			//_entityConverter = entityConverter;
		}

		[HttpGet]
		public async Task<ActionResult<List<Entity>>> GetCharacters()
		{
			var entity = await _characterService.GetCharacters();

			if (entity == null)
			{
				return NotFound();
			}

			return entity;
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Entity>> GetEntityById(int id)
		{
			var entity = await _characterService.GetCharacter(id);

			if (entity == null)
			{
				return NotFound();
			}

			return entity;
		}

		[HttpPost]
		public async Task<ActionResult<Entity>> CreateEntity(UpsertCharacter character)
		{
			var entity = await _characterService.CreateCharacter(character);
			return CreatedAtAction(nameof(GetEntityById), new { id = entity.Id }, entity);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<Entity>> UpdateEntity(int id, UpsertCharacter character)
		{
			var entity = await _characterService.UpdateCharacter(id, character);

			if (entity == null)
			{
				return NotFound();
			}

			return entity;
		}
	}
}

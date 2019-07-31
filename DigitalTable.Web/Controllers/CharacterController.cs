using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DigitalTable.Domain.Entities;
using DigitalTable.Persistence;
using Microsoft.EntityFrameworkCore;
using DigitalTable.Web.Models.Character;


namespace DigitalTable.Web.Controllers
{
	[Route("api/character")]
	[ApiController]
	public class CharacterController : Controller
	{
		private DigitalTableDbContext _context;
		public CharacterController(DigitalTableDbContext context)
		{
			_context = context;
		}

		[HttpGet]
		public async Task<ActionResult<List<Entity>>> GetCharacters()
		{
			var entity = await _context.Entities
				.Where(e => e.Type == EntityType.Character)
				.ToListAsync();

			if (entity == null)
			{
				return NotFound();
			}

			return entity;
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Entity>> GetEntityById(int id)
		{
			var entity = await _context.Entities
				.Where(e => e.Type == EntityType.Character && e.Id == id)
				.FirstOrDefaultAsync();

			if (entity == null)
			{
				return NotFound();
			}

			return entity;
		}

		[HttpPost]
		public async Task<ActionResult<Entity>> PostEntity(CreateCharacterModel character)
		{
			var entity = character.ToEntity();
			_context.Entities.Add(entity);
			await _context.SaveChangesAsync();
			return CreatedAtAction(nameof(GetEntityById), new { id = entity.Id }, entity);
		}
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DigitalTable.Domain.Entities;
using DigitalTable.Persistence;
using Microsoft.EntityFrameworkCore;


namespace DigitalTable.Web.Controllers
{
	[Route("api/entity")]
	[ApiController]
	public class EntityController : Controller
	{
		private DigitalTableDbContext _context;
		public EntityController(DigitalTableDbContext context)
		{
			_context = context;
		}

		[HttpGet]
		public async Task<ActionResult<List<Entity>>> GetEntities()
		{
			var entity = await _context.Entities.ToListAsync();

			if (entity == null)
			{
				return NotFound();
			}

			return entity;
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Entity>> GetEntityById(int id)
		{
			var entity = await _context.Entities.FindAsync(id);

			if (entity == null)
			{
				return NotFound();
			}

			return entity;
		}

		[HttpPost]
		public async Task<ActionResult<Entity>> PostEntity(Entity entity)
		{
			_context.Entities.Add(entity);
			await _context.SaveChangesAsync();
			return CreatedAtAction(nameof(GetEntityById), new { id = entity.Id }, entity);
		}

		// PUT: api/Todo/5
		[HttpPut("{id}")]
		public async Task<IActionResult> PutEntity(int id, Entity item)
		{
			if (id != item.Id)
			{
				return BadRequest();
			}

			_context.Entry(item).State = EntityState.Modified;
			await _context.SaveChangesAsync();

			return NoContent();
		}
	}
}

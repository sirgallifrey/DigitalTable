using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DigitalTable.Domain.Entities;
using DigitalTable.Web.Models.Entity;
using DigitalTable.Web.Services;


namespace DigitalTable.Web.Controllers
{
	[Route("api/entity")]
	[ApiController]
	public class CharacterController : Controller
	{
		private IEntityService _entityService;
		//private IEntityConverter _entityConverter;
		
		public CharacterController(IEntityService entityService/* , IEntityConverter entityConverter*/)
		{
			_entityService = entityService;
			//_entityConverter = entityConverter;
		}

		[HttpGet]
		public async Task<ActionResult<List<Entity>>> GetEntities()
		{
			var entity = await _entityService.GetEntities();

			if (entity == null)
			{
				return NotFound();
			}

			return entity;
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Entity>> GetEntityById(int id)
		{
			var entity = await _entityService.GetEntity(id);

			if (entity == null)
			{
				return NotFound();
			}

			return entity;
		}

		[HttpPost]
		public async Task<ActionResult<Entity>> CreateEntity(InsertEntity _entity)
		{
			var entity = await _entityService.CreateEntity(_entity);
			return CreatedAtAction(nameof(GetEntityById), new { id = entity.Id }, entity);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<Entity>> UpdateEntity(int id, UpdateEntity _entity)
		{
			var entity = await _entityService.UpdateEntity(id, _entity);

			if (entity == null)
			{
				return NotFound();
			}

			return entity;
		}
	}
}

using System;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using DigitalTable.Persistence;
using DigitalTable.Domain.Entities;
using DigitalTable.Web.Models.Entity;
using AutoMapper;

namespace DigitalTable.Web.Services {
	public class EntityService: IEntityService {

		private DigitalTableDbContext _context;
		private IMapper _mapper;

		public EntityService(DigitalTableDbContext context, IMapper mapper) {
			_context = context;
			_mapper = mapper;
		}
		public async Task<Entity> GetEntity(Guid id) {
			return await _context.Entities.FindAsync(id);
		}
		public async Task<List<Entity>> GetEntities() {
			return await _context.Entities.ToListAsync();
		}

		public async Task<Entity> CreateEntity(InsertEntity insertEntity) {
			var entity = _mapper.Map<Entity>(insertEntity);
			_context.Entities.Add(entity);
			await _context.SaveChangesAsync();
			return entity;
		}

		public async Task<Entity> UpdateEntity(Guid id, UpdateEntity updateEntity) {
			var entity = await GetEntity(id);
			if (entity != null) {
				entity.Name = updateEntity.Name;
				entity.Description = updateEntity.Description;
				entity.Properties = updateEntity.Properties;

				_context.Entities.Update(entity);

				// Save changes in database
				await _context.SaveChangesAsync();
			}
			return entity;
		}
	}
}
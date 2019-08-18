using System;

namespace DigitalTable.Domain.Entities
{
	public class Entity
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public EntityType Type { get; set; }
		public Properties Properties { get; set; }
		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
		public DateTime? DeletedAt { get; set; }
	}
}

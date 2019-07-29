using System;

namespace DigitalTable.Domain.Entities
{
	public class Entity
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public EntityType Type { get; set; }
		public string Properties { get; set; }
		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
		public DateTime DeletedAt { get; set; }
	}

}

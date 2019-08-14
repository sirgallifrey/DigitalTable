
using DigitalTable.Domain.Entities;

namespace DigitalTable.Web.Models.Entity {
	public class InsertEntity {
		public string Name { get; set; }
		public string Description { get; set; }
		public EntityType Type { get; set; }
		public Properties Properties { get; set; }
	}
}
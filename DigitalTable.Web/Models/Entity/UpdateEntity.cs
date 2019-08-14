
using DigitalTable.Domain.Entities;

namespace DigitalTable.Web.Models.Entity {
	public class UpdateEntity {
		public string Name { get; set; }
		public string Description { get; set; }
		public Properties Properties { get; set; }
	}
}
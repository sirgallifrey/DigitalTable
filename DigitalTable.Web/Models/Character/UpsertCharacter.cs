
using DigitalTable.Domain.Entities;

namespace DigitalTable.Web.Models.Character {
	public class UpsertCharacter {
		public string Name { get; set; }
		public string Description { get; set; }
		public CharacterProperties Properties { get; set; }
	}
}
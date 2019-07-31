using DigitalTable.Domain.Entities;
using Newtonsoft.Json;

namespace DigitalTable.Web.Models.Character {
	public class CreateCharacterModel {
		public string Name { get; set; }
		public string Description { get; set; }
		public CharacterProperties Properties { get; set; }

		public Entity ToEntity() {
			return new Entity() {
				Name = Name,
				Description = Description,
				Properties = JsonConvert.SerializeObject(Properties)
			};
		}
	}	
}
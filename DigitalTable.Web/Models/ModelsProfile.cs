
using AutoMapper;
using DigitalTable.Domain.Entities;
using DigitalTable.Web.Models.Character;

namespace DigitalTable.Web.Models
{
	public class ModelsProfile : Profile
	{
		public ModelsProfile()
		{
			CreateMap<Entity, UpsertCharacter>();
			CreateMap<UpsertCharacter, Entity>();
		}
	}
}

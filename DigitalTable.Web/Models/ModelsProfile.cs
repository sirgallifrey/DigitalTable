
using AutoMapper;
using DigitalTable.Web.Models.Entity;

namespace DigitalTable.Web.Models
{
	public class ModelsProfile : Profile
	{
		public ModelsProfile()
		{
			CreateMap<DigitalTable.Domain.Entities.Entity, InsertEntity>();
			CreateMap<InsertEntity, DigitalTable.Domain.Entities.Entity>();

			CreateMap<DigitalTable.Domain.Entities.Entity, UpdateEntity>();
			CreateMap<UpdateEntity, DigitalTable.Domain.Entities.Entity>();
		}
	}
}

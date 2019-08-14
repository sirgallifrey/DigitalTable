using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DigitalTable.Domain.Entities;
using DigitalTable.Infrastructure;
using Newtonsoft.Json;

namespace DigitalTable.Persistence.Configurations
{
	public class EntityConfiguration : IEntityTypeConfiguration<Entity>
	{
		public void Configure(EntityTypeBuilder<Entity> builder)
		{
			var jsonSerializerSettings = new JsonSerializerSettings {
				Converters = { new OneOfJsonConverter() }
			};

			builder.ToTable("entities");

			builder.HasKey(e => e.Id);

			builder.Property(e => e.Id)
				.HasColumnName("id")
				.ValueGeneratedOnAdd();

			builder.Property(e => e.Name)
				.HasColumnName("name")
				.IsRequired()
				.HasMaxLength(150);

			builder.Property(e => e.Description)
				.HasColumnName("description");

			builder.Property(e => e.Type)
				.HasColumnName("type")
				.HasColumnType("int");

			builder.Property(e => e.Properties)
				.HasColumnName("properties")
				.HasColumnType("jsonb")
				.HasConversion(
					e => JsonConvert.SerializeObject(e,
						jsonSerializerSettings
					),
					e => JsonConvert.DeserializeObject<Properties>(e)
				);

			builder.Property(e => e.CreatedAt)
				.HasColumnName("created_at")
				.HasColumnType("timestamp")
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.ValueGeneratedOnAdd();

			builder.Property(e => e.UpdatedAt)
				.HasColumnName("updated_at")
				.HasColumnType("timestamp")
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.ValueGeneratedOnAddOrUpdate();

			builder.Property(e => e.DeletedAt)
				.HasColumnName("deleted_at")
				.HasColumnType("timestamp");
		}
	}
}

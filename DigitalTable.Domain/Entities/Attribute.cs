using System;
using OneOf;

namespace DigitalTable.Domain.Entities
{
	public class Attribute
	{
		public string Name { get; set; }
		public OneOf<String, Boolean, Double> Value { get; set; }
	}
}

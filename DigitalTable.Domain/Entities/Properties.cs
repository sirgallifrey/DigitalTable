using System;
using System.Collections.Generic;

namespace DigitalTable.Domain.Entities
{
	public class Properties
	{
		public Dictionary<String, Attribute> Aributes { get; set; }
		public Dictionary<String, List<String>> Indexes { get; set; }
	}
}

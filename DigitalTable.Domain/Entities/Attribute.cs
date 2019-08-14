using System;
using System.Collections.Generic;
using OneOf;

namespace DigitalTable.Domain.Entities
{
	public class Attribute : Dictionary<String, OneOf<String, Double, Boolean>>
	{
		
	}
}

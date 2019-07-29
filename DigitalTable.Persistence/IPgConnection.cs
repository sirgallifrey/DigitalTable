using System;
using System.Data;
using Npgsql;

namespace DigitalTable.Persistence
{
	public interface IPgConnection: IDisposable
	{
		IDbConnection Connection { get; }
	}
}
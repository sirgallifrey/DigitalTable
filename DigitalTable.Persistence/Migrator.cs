using System;
using Microsoft.Extensions.Logging;
using System.Data;

namespace DigitalTable.Persistence
{
	public class Migrator
	{
		private ILogger _logger;
		private IDbConnection _conn;
		public Migrator(ILogger logger, IDbConnection conn)
		{
			_logger = logger;
			_conn = conn;
		}

		public void Migrate()
		{
			try
			{
				var evolve = new Evolve.Evolve(_conn, msg => _logger.LogInformation(msg))
				{
					//TODO: enhance this location thing
					Locations = new[] { "../DigitalTable.Persistence/Migrations" },
					IsEraseDisabled = true,
				};

				evolve.Migrate();
			}
			catch (Exception ex)
			{
				_logger.LogCritical("Database migration failed.", ex);
				throw ex;
			}
		}
	}
}

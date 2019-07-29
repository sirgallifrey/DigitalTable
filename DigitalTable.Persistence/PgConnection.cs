using System;
using System.Data;
using Npgsql;

namespace DigitalTable.Persistence
{
	public class PgConnection: IPgConnection
	{
		private readonly string _connectionString;
		private IDbConnection _conn;

		public PgConnection(string connectionString)
		{
			_connectionString = connectionString;
		}

		public IDbConnection Connection
		{
			get
			{
				if (_conn == null) {
					_conn = new NpgsqlConnection(_connectionString);
					_conn.Open();
				}
				return _conn;
			}
		}

		public void Dispose() {
			if (_conn != null && _conn.State != ConnectionState.Closed) {
				_conn.Close();
			}
		}
	}
}
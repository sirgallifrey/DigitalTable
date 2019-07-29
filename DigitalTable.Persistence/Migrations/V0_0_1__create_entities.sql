CREATE TABLE entities(
	id INT PRIMARY KEY NOT NULL,
	name VARCHAR(150) NOT NULL,
	description TEXT NOT NULL,
	properties JSONB,
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP
);
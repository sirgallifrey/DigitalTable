FROM postgres:10

RUN mkdir -p /docker-entrypoint-initdb.d
COPY ./createdatabases.sh /docker-entrypoint-initdb.d/createdatabases.sh

## starting DB

	docker-compose up

or on detached mode

	docker-compose up -d

## stop DB

	docker-compose stop

## drop DB

	docker-compose down

## start Web service

	dotnet restore
	dotnet build
	cd ./DigitalTable.Web
	dotnet run

## install certs

	dotnet tool install --global dotnet-dev-certs
	dotnet dev-certs https

# Setting up development environment

## Dependencies

- Node.js >= v10
- Yarn >= 1.17.3
- Dotnet core SDK v2.2
- Docker
- Docker-Compose

## Restore and build asp.net project

At the root of the project run these commands

	dotnet restore
	dotnet build

## Install front-end dependencies

Navigate to the front-end code folder and run `yarn install`

	cd DigitalTable.Web/ClientApp
	yarn install

## Install certificates and dotnet-watch

	dotnet tool install --global dotnet-watch
	dotnet tool install --global dotnet-dev-certs
	dotnet dev-certs https

# How to run the application in development mode

## 1 - First start the Database

	docker-compose up

or run it in detached mode (recomended)

	docker-compose up -d

On first run, docker will donwload the database image and will creae the basic database. The api will run the migrations on start.

## 2 - Start the Web Server watch process

	cd ./DigitalTable.Web
	dotnet watch run

## 3 - Start the front-end watch process

It has to be in another terminal window, since the web process will still be running on the previous one.

	cd ./DigitalTable.Web/ClientApp
	yarn start

## Use VSCode task instead

If you use visual studio code, you can run the task called `watch` insted of running the commands on 1, 2 and 3.


Now you can access the project on 

https://localhost:5001

or on

http://localhost:5000

And look at the API documentation on

https://localhost:5001/swagger/index.html

# Useful commands

## stop DB

	docker-compose stop

## drop DB

	docker-compose down

READER_SERVICE_BINARY=readerApp
RSS_TEST_SERVER_BINARY=rssTestServer

# up: starts all containers in the background without forcing build
up:
	@echo "Starting Docker images..."
	docker-compose up -d
	@echo "Docker images started!"

## up_build: stops docker-compose (if running), builds all projects and starts docker compose
up_build: build_reader_service build_rss_test_server
	@echo "Stopping docker images (if running...)"
	docker-compose down
	@echo "Building (when required) and starting docker images..."
	docker-compose up --build -d
	@echo "Docker images built and started!"

## down: stop docker compose
down:
	@echo "Stopping docker compose..."
	docker-compose down
	@echo "Done!"

## build_broker: builds the broker binary as a linux executable
build_reader_service:
	@echo "Building reader service binary..."
	cd ./reader-service/ && env GOOS=linux CGO_ENABLED=0 go build -o ${READER_SERVICE_BINARY} ./api
	@echo "Done!"

## build_logger: builds the logger binary as a linux executable
build_rss_test_server:
	@echo "Building rss_test_service binary..."
	cd ./rss-test-server/ && env GOOS=linux CGO_ENABLED=0 go build -o ${RSS_TEST_SERVER_BINARY} .
	@echo "Done!"


## build_front: builds the frone end binary
build_front:
	@echo "Building front end binary..."
	@echo "Done!"

## start: starts the front end
start: build_front
	@echo "Starting front end"

## stop: stop the front end
stop:
	@echo "Stopping front end..."
	@echo "Stopped front end!"

.PHONY: docker-compose-build-api
dev-docker-compose-build-api:
	@docker-compose --file docker/docker-compose.yml build

.PHONY: docker-compose-up-api
dev-docker-compose-up-api:
	@docker-compose --file docker/docker-compose.yml up

.PHONY: docker-compose-stop-api
dev-docker-compose-stop-api:
	@docker-compose stop

npm:
	npm run

.PHONY: run-server
run-dev-server: npm server --file api/package.json
	

.PHONY: dev-api
dev-api: dev-docker-compose-build-api dev-docker-compose-up-api

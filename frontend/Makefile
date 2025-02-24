# Variáveis
DOCKER_COMPOSE_FILE=../docker-compose.yaml



# Funções para Iniciar, Parar e Reiniciar o Servidor
start:
	@npm run build
	@docker compose -f $(DOCKER_COMPOSE_FILE) up -d --build

stop:
	@docker compose -f $(DOCKER_COMPOSE_FILE) down

restart: stop start


kabum:
	@docker system prune -a --force
	@docker volume prune -a --force
	@if [ -n "$$(docker ps -aq)" ]; then docker stop $$(docker ps -aq); fi
	@if [ -n "$$(docker ps -aq)" ]; then docker rm $$(docker ps -aq); fi
	@if [ -n "$$(docker images -q)" ]; then docker rmi $$(docker images -q); fi
	@if [ -n "$$(docker volume ls -q)" ]; then docker volume rm $$(docker volume ls -q); fi

# Variáveis
DOCKER_COMPOSE_FILE=./docker-compose.yaml

# Funções para o Banco de Dados

create-migrations:
	@PYTHONPATH=$PYTHONPATH:$(pwd) alembic revision --autogenerate -m $(msg)

run-migrations:
	@PYTHONPATH=$PYTHONPATH:$(pwd) alembic upgrade head

rollback-migrations:
	@PYTHONPATH=$PYTHONPATH:$(pwd) alembic downgrade $(id)

# Funções para Iniciar, Parar e Reiniciar o Servidor
start:
	@docker compose -f $(DOCKER_COMPOSE_FILE) up -d --build

stop:
	@docker compose -f $(DOCKER_COMPOSE_FILE) down

restart: stop start


test-schemas:
	@docker exec -it servup-api pytest -p no:warnings app/tests/test_schemas/$(file)


test-useCases:
	@docker exec -it servup-api pytest -p no:warnings app/tests/test_useCases/$(file)

test-routes:
	@docker exec -it servup-api pytest -p no:warnings app/tests/test_routes/$(file)


tests: 
	@docker exec -it servup-api pytest -p no:warnings app/tests/
	

# Comando docker para desbugar e destruir os dados do BD

kabum:
	@docker system prune -a --force
	@docker volume prune -a --force
	@if [ -n "$$(docker ps -aq)" ]; then docker stop $$(docker ps -aq); fi
	@if [ -n "$$(docker ps -aq)" ]; then docker rm $$(docker ps -aq); fi
	@if [ -n "$$(docker images -q)" ]; then docker rmi $$(docker images -q); fi
	@if [ -n "$$(docker volume ls -q)" ]; then docker volume rm $$(docker volume ls -q); fi

# Comando para dar Deploy no Front
deploy-front:
	sudo mkdir -p /var/www/waffle.alofan.com.br
	sudo cp -r frontend/dist/* /var/www/waffle.alofan.com.br
	sudo systemctl restart nginx

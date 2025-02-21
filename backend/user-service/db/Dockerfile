# Use a imagem oficial do PostgreSQL como base
FROM postgres:12

# Instale utilitários necessários
RUN apt-get update && apt-get install -y cron nano

# Define o diretório de trabalho
WORKDIR /docker-entrypoint-initdb.d/
    
# Define as variáveis de ambiente do PostgreSQL
ENV POSTGRES_DB=${USER_DB_DB_NAME}
ENV POSTGRES_USER=${USER_DB_USER}
ENV POSTGRES_PASSWORD=${USER_DB_PASSWORD}

# Expor a porta do PostgreSQL
EXPOSE 5432
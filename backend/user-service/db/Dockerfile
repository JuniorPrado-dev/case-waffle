# Use a imagem oficial do PostgreSQL como base
FROM postgres:12

# Instale utilitários necessários
RUN apt-get update && apt-get install -y cron nano

# Define o diretório de trabalho
WORKDIR /docker-entrypoint-initdb.d/

# Copia o arquivo SQL para inicializar o banco
COPY init.sql /docker-entrypoint-initdb.d/

# Define as variáveis de ambiente do PostgreSQL
ENV POSTGRES_DB=${POSTGRES_DB}
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}

# Expor a porta do PostgreSQL
EXPOSE 5432

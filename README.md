# garbatServer

1. Clonar el repositorio y correr npm install

2. Tener instalado docker y docker-compose.

3. Crear archivo .env en la raíz del proyecto completando con los correspondientes datos:

   - DB_USER=
   - DB_PWD=
   - DB_PORT=
   - DB_NAME=

4. Entrar a la carpeta docker/ y correr el siguiente comando:
   docker-compose --env-file ../.env -d up

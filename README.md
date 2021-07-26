# garbatServer

1. Clonar el repositorio y correr npm install

2. Tener instalado docker y docker-compose (https://docs.docker.com/docker-for-windows/install/).

3. Crear archivo .env en la raíz del proyecto completando con los correspondientes datos:

   - DB_USER=
   - DB_PWD=
   - DB_PORT=
   - DB_NAME=
   - DB_USER_ROOT=
   - DB_PWD_ROOT=
   - PORT=
   - JWT_SECRET=

4. Entrar a la carpeta docker/ y crear el archivo db-config.js:
   db.createUser({
   user: "tuuser",
   pwd: "tupwd",
   roles: [
   {
   role: "readWrite",
   db: "garbat",
   },
   ],
   });

5. correr el siguiente comando:
   docker-compose --env-file ../.env up -d

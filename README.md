# CRUD en DOCKER

Esta proyecto creado con Node.js en el backend y React en el frontend esta en formato Docker para facilitar el desarrollo y la implementación.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

    El backend se encuentra en el  `/docker_backend`  directorio.
    El frontend se encuentra en el `/docker_frontend` directorio.
    El directorio raíz contiene el `docker-compose.yml`archivo para ejecutar ambos servicios juntos.

## Puertos

- **Backend**: El servidor API Node.js se encuentra en el puerto **puerto 4000**.
- **Frontend**: La aplicacion React se encuentra en el puerto **puerto 3000**.

## Requisitos

Antes de comenzar, asegúrese de tener instalado lo siguiente:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)


Además, necesitará acceso a una instancia de **MongoDB** para almacenar los elementos pendientes.

## MongoDB Setup

Para que la aplicación funcione, debes crear una base de datos MongoDB.

Crea el archivo `.env` :
    - En el directorio raiz cree un `.env` archivo y agregue la cadena de conexion.

    Archivo de ejemplo  `.env`:

    ```env
    URL_Mongo=mongodb+srv://usuario:contraseña/tp-sistemas2
    PORT=4000
    ```

    - o reeemplace `URL_Mongo` con su cadena de conexion real.

Una vez que haya configurado su base de datos y la cadena de conexión, la aplicación podrá conectarse a MongoDB y almacenar los elementos pendientes.

## Instalacion del repositorio

```bash
git clone < URL-del-repositorio >
cd < nombre-del-repositorio >
```

## Docker Compose

En la raíz del proyecto, use docker-compose para compilar e iniciar los servicios de frontend y backend en contenedores. Para ejecutar los contenedores en modo independiente:

```bash
docker-compose up -d
```

## Ejecucion sin Docker

**Backend**

Vaya al directorio /backend e instale la dependencias del backend:

```bash
npm install
```

Inicia el servidor backend:

```bash
npm start
```

**Frontend**

Vaya al directorio /frontend e installe las dependencias del backend:

```bash
npm install
```

Inicia el servidor frontend:

```bash
npm run dev
```

La aplicacion estara disponible en http://localhost:3000.
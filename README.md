### Proyecto Final – Desarrollo y Deploy de una API REST en TypeScript

Este repositorio contiene el proyecto final desarrollado para la Diplomatura en Desarrollo Web Full Stack de la Universidad Tecnológica Nacional (UTN).
El objetivo del proyecto fue integrar los conocimientos del módulo "Programador Web Inicial - Back End Developer - Turno Tarde", desarrollando una API REST completa, funcional y robusta utilizando TypeScript, junto con su respectivo frontend.

### 🚀 Características principales
Backend (API REST) – Node.js + Express + TypeScript

- Registro de usuarios
- Login de usuarios
- Autenticación mediante JWT
- CRUD completo de productos
- Panel de administrador para la gestión de usuarios
- Filtros de productos por categorías
- Conexión con base de datos MongoDB usando Mongoose

### 💻 Frontend – JavaScript / TypeScript

- Interfaz para registro y login
- Vista de productos
- Gestión de productos y usuarios (solo admins)
- Manejo de estados y consumo de API

### 📱Base de Datos
- MongoDB
- Atlas (base de datos en la nube)
- MongoDB Compass (visualización)
- 
### ✅ Deploy
- Render → Backend
- Vercel → Frontend

### 🚨Git y GitHub → Control de versiones y repositorio central

### Instrucciones para ejecutar el proyecto en local

##  Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
-   [Node.js](https://nodejs.org/) (v20 o superior recomendado)
-   [npm](https://www.npmjs.com/)
   
1. Clonar o descargar el repositorio
   
Puedes descargarlo desde GitHub:
🔗 https://github.com/Matiasenriquez/Proyecto-Final-BackEnd-UTN

O desde GitHub:

git clone https://github.com/Matiasenriquez/Proyecto-Final-BackEnd-UTN.git


Si lo descargaste en ZIP:

Haz clic en Code > Download ZIP

Descomprime el archivo

## ⚙️ Instalación y ejecución del Backend
1. Abrir el proyecto en VS Code

Abre la carpeta del repositorio

Haz clic derecho en backend_utn-master → "Abrir en una terminal integrada"

2. Instalar dependencias y ejecutar

Ejecuta:

npm install y 
npm run dev

## 🖥️ Instalación y ejecución del Frontend
1. Abrir carpeta del frontend

Haz clic derecho en frontend-utn-master → "Abrir en una terminal integrada"

2. Instalar dependencias y ejecutar
npm install
npm run dev

La terminal te mostrará una URL similar a:
http://localhost:5173/
Haz clic en ese enlace para abrir la aplicación en tu navegador.


### Configurar variables de entorno:

Crea un archivo .env en la raíz del proyecto basándote en el archivo .env.example. Define las siguientes variables:

PORT=3000
JWT_SECRET=tu_secreto_super_seguro
URI_DB=tu_string_de_mongodb
EMAIL_USER=tu_email_para_enviar_correos
EMAIL_PASS=tu_contraseña_de_aplicacion_o_api_key

##  Endpoints Principales

### Autenticación (/auth)
-   POST /auth/register: Registrar un nuevo usuario.
-   POST /auth/login: Iniciar sesión y obtener token JWT.

### Products (/products)
-   GET /products: Obtener todos los productos.
-   GET /products/:id: Obtener un producto por su id.
-   POST /products: Crear un nuevo producto (requiere autenticación).
-   PATCH /products/:id: Actualizar un producto.
-   DELETE /products/:id: Eliminar un producto.

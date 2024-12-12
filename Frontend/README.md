# Proyecto React con Vite, Node.js y ExpressJS

## Descripción
Este proyecto es una aplicación completa que utiliza ReactJS con Vite para el frontend y Node.js con ExpressJS para el backend. Incluye funcionalidades CRUD y autenticación de usuarios.

## Requisitos
- Node.js
- MongoDB

## Instalación

### Clonar el Repositorio
1. Clona este repositorio:
   ```bash
   git clone https://github.com/brayan-V/proyecto_React.git
   ```
### Configuración del Backend
2. Navega al directorio del servidor:
   ```bash
   cd CRUD
   ```   
3. Instala las dependencias del backend:
   ```bash
   npm install
   ```   
4. Crea un archivo .env en el directorio del servidor y configura las siguientes variables:
   ```plaintext
   MONGODB_URI=<TU_URI_DE_MONGODB>
   PORT=5000
   JWT_SECRET=<TU_SECRETO_DE_JWT>
   ```   
 5. Inicia el servidor:
 ```bash
   node index.js
 ```
### Configuración del Frontend
6. Navega al directorio del cliente:
   ```bash
     cd ..
   ```
7. Instala las dependencias del frontend:
   ```bash
     npm install
   ``` 
8. Inicia la aplicación React:
   ```bash
     npm run dev
   ```
### Uso de la Aplicación
1. Accede a la aplicación en http://localhost:5174. o el que genere la ejecución del comando

2. Regístrate como usuario y utiliza las funcionalidades CRUD y de autenticación.

### Dependencias
### Backend
- express

- mongoose

- cors

- dotenv

- bcryptjs

- jsonwebtoken

### Frontend
- react

- react-dom

- vite

### Rutas de la API
- Registro de usuario:
  - ⭐ POST /registro
  - Cuerpo de la solicitud:
    ```Json
    {
    "nombreUsuario": "tuNombreDeUsuario",
    "email": "tuEmail@example.com",
    "clave": "tuClave"
    }
    ```
    
  - Respuestas:
  - **201**: Usuario registrado con éxito.
  - **409**: Nombre de usuario o email ya en uso.
  - **500**: Error al registrar el usuario.
    
- Login de usuario:
  - ⭐ POST /login
  - Cuerpo de la solicitud:
    ```Json
    {
    "nombreUsuario": "tuNombreDeUsuario",
    "clave": "tuClave"
    }
    ```
  - Respuestas:
  - **200**: Inicio de sesión exitoso.
  - **404**: Usuario no encontrado.
  - **401**: Contraseña incorrecta.
  - **500**: Error al iniciar sesión.
### Operaciones CRUD
- Obtener items:
    - ⭐GET /items
      - Respuesta:
        - **200**: Lista de items en formato JSON.
- Crear item:
  -  ⭐ POST /items
    - Cuerpo de la solicitud:
    ```Json
    {
    "nombre": "Nombre del Item",
    "email": "Email del Item",
    "mensaje": "Mensaje del Item"
    }
    ``` 
    - Respuesta:
      - **201**: Item creado con éxito.
      - **500**: Error al crear el item.
- Actualizar item:
  -  ⭐ PUT /items/:id
    - Cuerpo de la solicitud:
    ```Json
    {
    "nombre": "Nombre actualizado del Item",
    "email": "Email actualizado del Item",
    "mensaje": "Mensaje actualizado del Item"
    }
    ``` 
    - Respuesta:
      - **200**: Item actualizado con éxito.
      - **500**: Error al actualizar el item.
- Eliminar item:
    - ⭐DELETE /items/:id
      - Respuesta:
        - **204**: Item eliminado con éxito.
        - **500**: Error al eliminar el item.

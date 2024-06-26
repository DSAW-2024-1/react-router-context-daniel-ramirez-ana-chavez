[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/yGCr2kOI)
# Desarrollo de Aplicaciones Web
## Daniel Ramirez & Ana María Chaves Pérez
### Universidad de La Sabana
#### 2024 - I

## Router Seguro con React.js

### Objetivo
Crear un router seguro utilizando React.js, React Context y localStorage. Permitir que el usuario con correo "admin@admin.com" y clave "admin" pueda acceder a todas las páginas, mientras que los usuarios no logeados o que intenten acceder a páginas prohibidas sean redirigidos al login. Las páginas del sistema serán: login, home, overview y contact.

### Funcionalidades
- Login: Permite al usuario ingresar con correo y contraseña.
- Home: Muestra el nombre "Home" y presenta un menú de navegación (usted decide como implementar el logout)
- Overview: Muestra el nombre "Overview" y presenta un menú de navegación (usted decide como implementar el logout)
- Contact: Muestra el nombre "Contact" y presenta un menú de navegación (usted decide como implementar el logout)

### Requisitos
- El trabajo debe ser entregado en los grupos del proyecto final.
- La entrega máxima es el 6 de mayo a las 6:55 am.
- Se debe utilizar React Context; si se utiliza Redux u otra herramienta, habrá una penalización de **1 unidad**.
- Lea bien la actividad y asegúrese de seguir las instrucciones presentadas en este documento.

### Páginas
1. **Login (`/login`)**
   - Desarrollar la página de login para ingresar con correo y contraseña.
   - Almacenar la sesión en localStorage para persistir el login.

2. **Home (`/`)**
   - Mostrar un mensaje de bienvenida.
   - Incluir un menú de navegación para acceder a las otras páginas.

3. **Overview (`/overview`)**
   - Mostrar información general del sistema.
   - Incluir un menú de navegación para acceder a las otras páginas.

4. **Contact (`/contact`)**
   - Mostrar un formulario de contacto.
   - Incluir un menú de navegación para acceder a las otras páginas.

### Evaluación
- Navegación del usuario autenticado: 1.5 puntos.
- Protección de rutas: 1.5 puntos.
- Uso correcto del contexto: 1 punto.
- Uso de localStorage: 1 punto.

### Importante
- Si la tarea no está desplegada, no será calificada.
- No se calificarán tareas tardías.
- Si el repositorio no se marca, se obtendrá una calificación de 0.

**¡Buena suerte!**

Daniel Ramirez & Ana María Chaves Pérez

[URLtrabajo](https://repo-login-santii08s-projects.vercel.app/login)

Tuvimos un problema con el repo que salió del fork, eso estaba loco. Por lo tanto, como buenos ingenieros, solucionamos y creamos otro repositorio, y ahí sí funcionó. El error es que en este repo y en el fork verás dos carpetas: `Components` y `components`, y la segunda no existía en nuestro código. Cuando lo clonamos, tampoco existía. Entonces, clonamos el repo y ese nuevo repo fue el que subimos a Vercel. De igual manera, el código es el mismo, solo cambió ese pequeño detalle de las dos carpetas. A continuación, el repo que funcionó:

[RepoQueFunciono](https://github.com/Santii08/repo_login.git)


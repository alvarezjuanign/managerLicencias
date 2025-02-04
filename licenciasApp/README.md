Proyecto de Gestión de Tablas de Profesores
Este proyecto es una aplicación web que permite gestionar tablas dinámicas de profesores/as. Cada tabla incluye información sobre un/a profesor/a (nombre, DNI, cargo, turno) y una matriz de datos mensuales. La aplicación también incluye funcionalidades como búsqueda, agregar nuevas tablas, borrar datos y soporte para impresión.

Características principales
Tablas dinámicas : Genera tablas personalizadas para cada profesor/a.
Búsqueda por nombre : Filtra las tablas según el nombre del profesor/a ingresado.
Agregar tablas : Agrega nuevas tablas dinámicamente con un solo clic.
Borrar datos : Elimina todos los datos almacenados localmente.
Impresión optimizada : Ajusta las tablas para que se impriman correctamente en hojas A4, con un máximo de dos tablas por página.
Persistencia de datos : Guarda los datos en localStorage para mantenerlos entre sesiones.
Tecnologías utilizadas
React : Framework principal para la interfaz de usuario.
Tailwind CSS : Biblioteca de estilos utilitarios para diseño responsivo.
Sonner : Biblioteca para mostrar notificaciones (toasts).
LocalStorage : Almacenamiento local para persistir los datos de las tablas.
Estructura del proyecto
Copy
1
2
3
4
5
6
7
8
9
10
11
12
proyecto-tablas-profesores/
├── public/ # Archivos estáticos (imágenes, íconos, etc.)
├── src/
│ ├── components/ # Componentes reutilizables
│ │ ├── Tabla.jsx # Componente principal para renderizar tablas
│ │ ├── BotonBorrarDatos.jsx # Botón para borrar datos
│ │ └── barraDeBusqueda.jsx # Barra de búsqueda
│ ├── App.jsx # Componente principal de la aplicación
│ └── main.jsx # Punto de entrada de la aplicación
├── package.json # Dependencias y scripts del proyecto
├── README.md # Documentación del proyecto
└── assets/ # Imágenes y recursos visuales
Instalación
Clona este repositorio:
bash
Copy
1
2
git clone https://github.com/tu-usuario/proyecto-tablas-profesores.git
cd proyecto-tablas-profesores
Instala las dependencias:
bash
Copy
1
npm install
Inicia el servidor de desarrollo:
bash
Copy
1
npm start
Abre la aplicación en tu navegador:
Copy
1
http://localhost:3000
Uso
Agregar una nueva tabla
Haz clic en el botón "+" para agregar una nueva tabla. Cada tabla incluye campos para ingresar información del profesor/a y una matriz de datos mensuales.
Buscar tablas
Usa la barra de búsqueda para filtrar las tablas por el nombre del profesor/a.
Borrar datos
Haz clic en el botón "Borrar datos" para eliminar todos los datos almacenados localmente. Se mostrará una notificación confirmando la acción.
Imprimir tablas
Usa la función de impresión de tu navegador (Ctrl + P o Cmd + P) para imprimir las tablas. Las tablas se ajustarán automáticamente para caber en hojas A4, con un máximo de dos tablas por página.
Personalización
Puedes personalizar la aplicación modificando los siguientes aspectos:

Estilos : Edita las clases de Tailwind CSS en los componentes para cambiar el diseño.
Mensajes de notificación : Modifica los mensajes de toast.success y toast.error en los componentes para personalizar las notificaciones.
Persistencia de datos : Si deseas cambiar el almacenamiento local (localStorage) por otra solución (como una base de datos), modifica el código en App.jsx.
Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras errores o tienes ideas para mejorar el proyecto, no dudes en abrir un issue o enviar un pull request.

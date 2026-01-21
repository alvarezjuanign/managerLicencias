# Proyecto de Gestión de Tablas de Profesores

Este proyecto es una aplicación web que permite gestionar tablas dinámicas de profesores/as. Cada tabla incluye información sobre un/a profesor/a (nombre, DNI, cargo, turno) y una matriz de datos mensuales. La aplicación también incluye funcionalidades como búsqueda, agregar nuevas tablas, borrar datos y soporte para impresión.

## Características principales

- **Tablas dinámicas**: Genera tablas personalizadas para cada profesor/a.
- **Búsqueda por nombre**: Filtra las tablas según el nombre del profesor/a ingresado.
- **Agregar tablas**: Agrega nuevas tablas dinámicamente con un solo clic.
- **Borrar datos**: Elimina todos los datos almacenados localmente.
- **Impresión optimizada**: Ajusta las tablas para que se impriman correctamente en hojas A4, con un máximo de dos tablas por página.
- **Persistencia de datos**: Guarda los datos en `localStorage` para mantenerlos entre sesiones.

## Tecnologías utilizadas

- **React**: Framework principal para la interfaz de usuario.
- **Tailwind CSS**: Biblioteca de estilos utilitarios para diseño responsivo.
- **Sonner**: Biblioteca para mostrar notificaciones (toasts).
- **LocalStorage**: Almacenamiento local para persistir los datos de las tablas.

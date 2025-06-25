# 🛒 NavegaLasRutas - Martínez

Este proyecto fue realizado como parte del curso de React de la Carrera Fullstack. Consiste en una tienda online simulada que implementa navegación entre distintas vistas utilizando **React Router DOM**.

## 🎯 Objetivo

Implementar un sistema de rutas para navegar entre:

- Catálogo principal de productos
- Productos filtrados por categoría
- Vista en detalle de un producto

Además, se prepara la interfaz para agregar unidades al carrito de compras.

## 🚀 Funcionalidades

✅ Navegación con enlaces usando `<Link>` de React Router  
✅ Uso de rutas dinámicas con `useParams()`  
✅ Listado de productos con `map()` y `key`  
✅ Filtro de productos por categoría  
✅ Detalle individual de productos con su propio ID  
✅ Uso de `useEffect()` para reaccionar a cambios de URL  
✅ Promesas simuladas con retardo para obtener productos  
✅ Ruta 404 para manejar errores de navegación

## 🧩 Componentes principales

### 🔹 Contenedores (manejan estado y efectos)

- **ItemListContainer**: obtiene productos o productos por categoría
- **ItemDetailContainer**: obtiene un producto por ID

### 🔹 Presentacionales

- **ItemList**: muestra una lista de productos
- **Item**: vista individual de cada producto
- **ItemDetail**: vista detallada de un producto
- **ItemCount**: permite seleccionar unidades

## 🧭 Rutas implementadas

- `/` → Catálogo principal
- `/category/:categoryId` → Productos filtrados por categoría
- `/item/:itemId` → Detalle de producto
- `*` → Página 404

## 🗂️ Estructura del proyecto

src/
├── components/
│ ├── NavBar/
│ ├── ItemListContainer/
│ ├── ItemDetailContainer/
│ ├── ItemList/
│ ├── Item/
│ ├── ItemDetail/
│ └── ItemCount/
├── data/
│ └── products.js
├── App.js
└── main.jsx


## 🛠️ Tecnologías usadas

- React
- React Router DOM
- JavaScript
- Promesas simuladas
- HTML/CSS


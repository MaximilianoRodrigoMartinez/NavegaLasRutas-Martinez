const API_BASE_URL = 'https://dummyjson.com';

// Función para obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Error al cargar los productos');
  }
};

// Función para obtener productos por categoría
export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw new Error('Error al cargar los productos de esta categoría');
  }
};

// Función para obtener un producto específico por ID
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Producto no encontrado');
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Error fetching product by id:', error);
    throw new Error('Error al cargar el producto');
  }
};

// Función para obtener todas las categorías disponibles
export const getCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Error al cargar las categorías');
  }
};

// Función para buscar productos
export const searchProducts = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error searching products:', error);
    throw new Error('Error al buscar productos');
  }
}; 
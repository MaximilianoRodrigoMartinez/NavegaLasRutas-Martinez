import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  const handleAddToCart = (quantity) => {
    alert(`Se agregaron ${quantity} unidades de ${product.title} al carrito`);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        width: '100%'
      }}>
        <img 
          src={product.thumbnail} 
          alt={product.title}
          style={{ 
            width: '400px', 
            height: '400px', 
            objectFit: 'cover', 
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        />
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '28px' }}>{product.title}</h1>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff', margin: '10px 0' }}>
            ${product.price}
          </p>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', margin: '15px 0' }}>
            {product.description}
          </p>
          <p style={{ fontSize: '14px', color: '#888' }}>
            Categoría: {product.category}
          </p>
          <p style={{ fontSize: '14px', color: '#888' }}>
            Marca: {product.brand}
          </p>
          <p style={{ fontSize: '14px', color: '#888' }}>
            Rating: {product.rating} ⭐
          </p>
        </div>
        <ItemCount 
          stock={product.stock} 
          onAdd={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ItemDetail; 
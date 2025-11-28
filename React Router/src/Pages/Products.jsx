import React from 'react';
import { NavLink } from 'react-router-dom';
import { products } from '../ProductsData';

const Products = () => {
  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>All Products</h2>
      <ul className='flex flex-col gap-2'>
        {products.map((product) => (
          <li key={product.id}>
            <NavLink
              className={({ isActive }) => isActive ? "font-bold underline" : undefined}
              to={`/products/${product.category}/${product.id}`}
            >
              {product.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

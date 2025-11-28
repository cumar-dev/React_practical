import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../ProductsData';

const ProductsDetails = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();

 
  const product = products.find(p => p.category === categoryId && p.id === productId);

  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>Product Details</h2>

      {product ? (
        <>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Product Name:</strong> {product.name}</p>
          <p><strong>Price:</strong> {product.price}</p>
        </>
      ) : (
        <p>Product not found!</p>
      )}

      <button
        className='mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductsDetails;

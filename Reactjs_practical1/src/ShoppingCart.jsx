import { useState } from "react";

function ShoppingCart() {
     const [products, setProducts] = useState([]);
     const [productName, setProductName] = useState('');
     const [productPrice, setProductPrice] = useState('');
     function addCart() {
        if(productName.trim() !== "" && productPrice.trim() !== "") {
            
         const newProduct = {
            id: Date.now(),
            name: productName,
            price: parseFloat(productPrice),
            quantity: 1
         }
         setProducts([...products, newProduct]);
         setProductName('');
         setProductPrice('');
        }
     }   
     
     const handleRemoveProduct = (id)=> {
       const updatedProducts = products.filter(product => product.id !== id);
       setProducts(updatedProducts);
     }

     const increaseQuantity = (id)=> {
        const updatedProducts = products.map(product =>(
            product.id === id ? {...product, quantity: product.quantity + 1} : product
        ))
        setProducts(updatedProducts);
     }

     const decreaseQuantity = (id)=> {
        const updatedProducts = products.map(product => (
            product.id === id && product.quantity > 1 ? {...product, quantity: product.quantity -1} : product
        ))
        // .filter(product => product.quantity > 0)

        setProducts(updatedProducts);
     }

     const totalPrice = products.reduce(
        (total, product) => total + product.price * product.quantity, 0
     )

    return(
        <>
         <div>
            <h2>Simple Shopping Cart</h2>
            <div>
                <h3>Add Product</h3>
                <input type="text" placeholder="product name" value={productName} onChange={(e => setProductName(e.target.value))} />
                <input type="number" min={0} step={1} placeholder="product price" value={productPrice} onChange={(e => setProductPrice(e.target.value))} />
                <button onClick={addCart}>Add to Cart</button>
            </div>
            {
                products.length > 0 ? (
                    <div>
                     <h3>products in the cart</h3>
                       <ul>
            {
                products.map(product => (
               <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)} -
                 <div>
                    Quantity:
                    <button onClick={()=> decreaseQuantity(product.id)}>-</button>
                    {product.quantity}
                    <button onClick={()=> increaseQuantity(product.id)}>+</button>
                 </div>
                 <button onClick={()=> handleRemoveProduct(product.id)}>Remove</button>
               </li>
                ))
            }
            </ul>
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            </div>
                    
                ) : <p>the cart is empty</p>
            }
           
         </div>
        </>
    )
}

export default ShoppingCart;
import { useState, useEffect } from 'react';
import Product from '../components/common/Product';

export default function Products() {
  const url = 'https://mocki.io/v1/2d76c903-8322-49f9-8c9c-26d344d04dd2';

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className='container mx-auto p-8 md:p-24 dark:bg-black'>
      <h3 className='pb-24 text-center text-4xl font-bold dark:text-gray-300'>Shop</h3>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

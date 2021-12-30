import { useSelector } from 'react-redux';
import CheckoutForm from '../components/checkout/CheckoutForm';

export default function checkout() {
  const products = useSelector((state) => state.products.productList);
  return (
    <div className='container mx-auto p-8 md:p-24 dark:bg-black'>
      <h3 className='pb-24 text-center text-4xl font-bold dark:text-gray-300'>Checkout</h3>
      <div className='container mx-auto'>
        <table className='w-full border dark:border-gray-800 border-collapse table-fixed'>
          <thead>
            <tr>
              <th>Sl. no.</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={product?.id}>
                <td>{idx + 1}</td>
                <td>{product?.title}</td>
                <td>{product?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <CheckoutForm />
      </div>
    </div>
  );
}

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/productSlice';

export default function Product({ product }) {
  const dispatch = useDispatch();
  return (
    <div className='overflow-hidden border dark:border-gray-900 p-3'>
      <img className='w-full h-52 object-cover' src={product?.image} alt='Sunset in the mountains' />
      <div className='px-1 py-4'>
        <h3 className='font-medium text-xl dark:text-gray-300 mb-2 line-clamp-2 text-center'>{product?.title}</h3>
        <p className='text-2xl text-gray-500 line-clamp-2 text-center'>{`$${product?.price}`}</p>
      </div>
      <button onClick={() => dispatch(addToCart(product))} className='w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
        Add to Card
      </button>
    </div>
  );
}

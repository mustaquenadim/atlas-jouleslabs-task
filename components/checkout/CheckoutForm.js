import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import swal from 'sweetalert';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error);
      swal('Sorry!', `${error.message}`, 'error');
    } else {
      console.log(paymentMethod);
      swal('Good job!', 'You payment is successful!', 'success');
    }
  };
  return (
    <div className='flex items-center justify-center dark:bg-black'>
      <div className='w-96 text-center border dark:border-gray-800 drop-shadow-xl bg-neutral-100 dark:bg-neutral-900 p-3'>
        <h3>Payment</h3>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button className='bg-blue-500 hover:bg-blue-700 text-white my-3 py-2 px-4 focus:outline-none focus:shadow-outline' type='submit' disabled={!stripe}>
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}

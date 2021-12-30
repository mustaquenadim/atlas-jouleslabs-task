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
    } else {
      console.log(paymentMethod);
      swal('Good job!', 'You payment is successful!', 'success');
    }
  };
  return (
    <form onSubmit={handleSubmit} className='py-9'>
      <CardElement />
      <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 focus:outline-none focus:shadow-outline' type='submit' disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

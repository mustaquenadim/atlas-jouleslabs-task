import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

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
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 focus:outline-none focus:shadow-outline' type='submit' disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
}

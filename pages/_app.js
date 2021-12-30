import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Elements>
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);

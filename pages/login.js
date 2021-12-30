import { useDispatch } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from '../firebase.config';
import { setUser } from '../redux/slice/authSlice';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ additionalUserInfo }) => {
        dispatch(setUser(additionalUserInfo.profile));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='h-96 flex items-center justify-center dark:bg-black'>
      <button onClick={handleGoogleSignIn} className='flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent'>
        <FcGoogle className='mr-3' /> Sign In with Google
      </button>
    </div>
  );
}

import { signOut } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [guser] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () =>{
        signOut(auth);
        navigate('/login')
    }
 
    if (loading) {
      return <p>Loading...</p>;
    }
  if(user){
      
      navigate('/main')
  }


    return (
        <div className='d-flex justify-content-center my-5'>
           {
               guser ? <button onClick={handleSignOut} className='btn btn-outline-primary'>SignOut</button>:<button onClick={() => signInWithGoogle()} className='btn btn-outline-primary btn-lg'>GoogleSignIn</button>
           }
           
       
        </div>
    );
};

export default Login;
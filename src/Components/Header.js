import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
// import auth from '../../firebase.init';

const Header = () => {
    const [guser] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () =>{
        signOut(auth);
        navigate('/login')
        
    }

    return (
        <div className='d-flex bg-light container-fluid justify-content-center align-items-center'>
            <Link className='mx-2 fs-2 fw-bold text-black'  to='/'>Home</Link>
            <Link  className='mx-2 fs-2 fw-bold text-black' to='/main'>To-Do</Link>
            {
                guser ? <button  className='btn-outline-primary' onClick={handleSignOut}>SignOut</button>:
                <Link  className='mx-2 fs-2 fw-bold text-black' to='/login'>Login</Link>
            }
            
        </div>
    );
};

export default Header;
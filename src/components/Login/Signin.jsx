import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { signinUser } from '../../redux/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router'

function Signin() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(signinUser(data)) 
    }
    const user = useSelector((state) => state.user) 


    if(user.status === 'success') return <Navigate to='/recs' />
    return (
        <>
            <a href="http://localhost:7000/users/spotify/login">Sign in with Spotify</a>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input {...register("email")} />
                <label>Password</label>
                <input {...register("password")} />
                <input type="submit" />
            </form>
        </>
    );
}

export default Signin;
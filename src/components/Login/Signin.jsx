import React from 'react';
import { useForm } from 'react-hook-form'
import { signinUser } from '../../redux/user';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router'

function Signin() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(signinUser(data)) 
    }

    const user = useSelector((state) => state.user) 

    return (
        <>
            <a href="http://localhost:7000/users/spotify/login">Sign in with Spotify</a>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                <input {...register("username")} />
                <label>Password</label>
                <input {...register("password")} />
                <input type="submit" />
            </form>
        </>
    );
}

export default Signin;
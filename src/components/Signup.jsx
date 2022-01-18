import React from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/user';
import { incrementMatch } from '../redux/matches';
import { Navigate } from 'react-router'

function Signup() {  
    
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        dispatch(signupUser(data)) 
    }

    const user = useSelector((state) => state.user) 

    if(Object.keys(user.currentUser).length) return <Navigate to="/recs" replace={true}/>
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input {...register("username")} />
            <label>Password</label>
            <input {...register("password")} />
            <label>Role</label>
            <input {...register("role")} />
            <label>Display Name</label>
            <input {...register("display_name")} />
            <input type="submit" />
            <button onClick={() => dispatch(incrementMatch())}>+</button>
        </form>
    );

}

export default Signup;
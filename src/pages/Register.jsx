import React from 'react'
import { useForm } from 'react-hook-form'
import useAutenthication from '../hooks/useAuthentication'
import defaultRegisterValues from '../utils/defaultRegisterValues'
import "./styles/register.css"

const Register = () => {

  const { register, handleSubmit, reset } = useForm()

  const { createNewUser } = useAutenthication()

  const submit = data => {
    createNewUser(data)
    reset(defaultRegisterValues)
  }

  return (
    <div className='register'>
      <form className='register_form' onSubmit={handleSubmit(submit)}>
              <h2 className='register_title'>Create a new user</h2>
        <div className='register_input-container'>
          <label className='register_label' htmlFor="">First Name</label>
          <input className='register_input' {...register("firstName")} type="text" id='firstName' />
        </div>
        <div className='register_input-container'>
          <label className='register_label' htmlFor="lastName">Last Name</label>
          <input className='register_input' {...register("lastName")} type="text" id='lastName' />
        </div>
        <div className='register_input-container'>
          <label className='register_label' htmlFor="email">Email</label>
          <input className='register_input' {...register("email")} type="email" id='email' />
        </div>
        <div className='register_input-container'>
          <label className='register_label' htmlFor="password">Password</label>
          <input className='register_input' {...register("password")} type="password" id='password' />
        </div>
        <div className='register_input-container'>
          <label className='register_label' htmlFor="phone">Phone Number</label>
          <input className='register_input' {...register("phone")} type="number" id='phone' />
        </div>
        <button className='register_btn'>Register</button>
      </form>
    </div>

  )
}

export default Register
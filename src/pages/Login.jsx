import React from 'react'
import useAutenthication from '../hooks/useAuthentication'
import "./styles/login.css"

const Login = () => {

  const { loginUser, loginError} = useAutenthication()

  localStorage.getItem("userFullName")
  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const data = { email, password }
        loginUser(data)
  }



  return (


    <div className='login'>



      {
         localStorage.getItem("userFullName") && localStorage.getItem("token")
         ? 
        <>
        <div className='user_icon-container'>
          <img className='user_icon' src="/userIcon.png" alt="" />
        </div>

   <p className='welcome_user-p'><span className='welcome_user-span'>Welcome! </span> {localStorage.getItem("userFullName")}</p>
   <p className='logOut_user-p' onClick={() =>  {localStorage.removeItem("token"),
        localStorage.removeItem("userFullName"),  window.location.reload()}}>Log Out</p>

     
        </>
     
      :
      
      <>
            <h2 className='login_title'>Welcome! Enter your email and password to continue</h2>
      <p className='login_paragraph'>You have to Log In to access to your cart</p>

      <form className='login_form' onSubmit={handleLogin}>
        <div className='login_info-container'>
          <label className='login_label' htmlFor="email">Email</label>
          <input className='login_input' type="email" id='email' />
        </div>
        <div className='login_info-container'>
          <label className='login_label' htmlFor="password">Password</label>
          <input className='login_input' type="password" id="password" />
        </div>
       { 
       loginError 
       ? <p className='invalidCredentials'>Invalid credentials</p>
       : <p>&nbsp;</p>
       }
        <button className='login_btn'>Sign In</button>
      </form>
      </>
}
    </div>

  )
}

export default Login
import Image from 'next/image'
import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Music World</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
                ipsam eos deleniti possimus, quo, inventore dolorem at assumenda voluptate repellendus aspernatur!
                 Repellat totam error dicta! Nam a eum saepe optio unde deleniti, accusantium doloribus dolore cupiditate!</p>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
                ipsam eos deleniti possimus, quo, inventore dolorem at assumenda voluptate repellendus aspernatur!
                 Repellat totam error dicta! Nam a eum saepe optio unde deleniti, accusantium doloribus dolore cupiditate!</p>
                  <span>Want an account?</span>
                    
                    <button>Register</button>
            </div>
            <div className="right">
            <h1>Login</h1>
            <form>
            <input type="text" placeholder='User Name'/>
            <input type="password" name="" id="" placeholder='Password'/>
            <button>Login</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login

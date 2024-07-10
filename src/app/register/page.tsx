import './register.css'

const Register = () => {
  return (
    <div className='register '>
    <div className="card flex flex-col lg:flex-row">
        <div className="left w-full lg:w-1/2">
            <h1>Register</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, 
            ipsam eos deleniti possimus, quo, inventore dolorem at assumenda voluptate repellendus aspernatur!
             Repellat totam error dicta! Nam a eum saepe optio unde deleniti, accusantium doloribus dolore cupiditate!</p>
             
              <span>Do you have an account?</span>
                
                <button>Register</button>
        </div>
        <div className="right  w-full lg:w-1/2">
        <h1>Register</h1>
        <form>
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
        <input type="text" placeholder='Email Address'/>
        <input type="text" placeholder='User Name'/>
        <input type="password" name="" id="" placeholder='Password'/>
        <button>Register</button>
        </form>
        </div>
    </div>
</div>
  )
}

export default Register
import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async  (e) =>{
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup',{
        method:'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
// console.log(data)
      navigate('/sign-in')
      if (data.success === false){
        setError(true);
        return;
      }

    } catch (error) {
      setLoading(false);
      setError(true);
    }  
    
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <input type='text' placeholder='username' id='username' className='bg-slate-100 p-3 rounded-lg'onChange={handleChange}/>
        <input type='email' placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='text' placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>

        <button disabled= {loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>

      </form>

      <div className='flex gap-2 mt-5'>
        <p>Have an Account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>

      <p className='text-red-700 mt-5'>{error && 'Something went Wrong'}</p>
      
    </div>
  )
}

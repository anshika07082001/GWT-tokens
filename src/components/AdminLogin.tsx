import React, { useRef, useState } from 'react'

const AdminLogin = () => {

    var emailRef = useRef<HTMLInputElement>(null);
    var pwdRef = useRef<HTMLInputElement>(null);
    var [data,setData]=useState('')

    const loginHandler=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(emailRef.current!==null && pwdRef.current!==null){
            fetch('https://reqres.in/api/login',{
                method:'POST',
                headers:{ 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    email:`${emailRef.current.value}`,
                    password:`${pwdRef.current.value}`
                })
            })
            .then(res=>res.json())
            .then(res=>{
                setData(JSON.stringify(res))
            })
        }
        e.currentTarget.reset()
    }
    
    return (
    <div className='col-6 p-5 m-auto d-flex flex-column justify-content-center align-items-center'>
      <h3>Admin Login Portal</h3>
      <form className='mt-3 shadow p-5 rounded border-dark d-flex flex-column align-items-start' onSubmit={(e)=>loginHandler(e)}>
            <label>Email:</label>
          <input type='email' placeholder='Enter Your Email' ref={emailRef}/>
          <label>Password:</label>
          <input type='password' placeholder='Enter Your Password' ref={pwdRef}/>
          <button type='submit' className='btn btn-dark m-auto mt-3 col-12'>Login</button>
      </form>
      <br/>
      <h2>{data}</h2>
    </div>
    )
}

export default AdminLogin
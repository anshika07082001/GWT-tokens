import React, { useEffect, useRef, useState } from 'react'
import { useJwt } from "react-jwt";
import { useNavigate } from 'react-router-dom';

type tok = {email:string,password:string,token:string}
type data ={ email:string,password:string,exp:any,role:string }

type logProps={
  tokenArr:tok[]
}

const Login = (props:logProps) => {
  var navigate = useNavigate()
  const {tokenArr}=props
  var [token,setToken]=useState<tok>({email:'',password:'',token:''})
  var { decodedToken } = useJwt<data>(token.token);
  var [msg,setMsg]=useState('')

  var emailRef= useRef<HTMLInputElement>(null)
  var pwdRef= useRef<HTMLInputElement>(null)
  
  // function used to login the user
  const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    tokenArr.map((item)=>{
      if(emailRef.current!==null && pwdRef.current!==null){
        if(emailRef.current.value!=='' && pwdRef.current.value!==''){
          if(item.email==emailRef.current.value && item.password==pwdRef.current.value){
            token = item
            alert('Login successful')
            setMsg('')
          }
          if(item.email!==emailRef.current.value && item.password!==pwdRef.current.value){
            setMsg('User Not Found')
          }
        }
        else{
          alert('Fill details')
        }
      }
    })
    setToken(token)
    e.currentTarget.reset()
  }

  useEffect(()=>{
    if(decodedToken?.role=='Admin'){
      navigate('/dashboard')
    }
  },[decodedToken])

  return (
  <>
    <div className='col-6 m-auto'>
        <h2 className='text-center'>Login</h2>
        <form className='shadow p-5 mt-3 bg-light rounded' onSubmit={(e)=>submitHandler(e)}>
          <h5 className='text-center text-danger'>{msg}</h5>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" ref={emailRef}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" ref={pwdRef}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  </>
  )
}

export default Login
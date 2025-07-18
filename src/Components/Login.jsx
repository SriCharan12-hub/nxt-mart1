import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {
  const navigate=useNavigate()
  const [check,setCheck]= useState(false)
  const [pass,setPass]=useState("")
  const [username,setUsername]=useState("")
  const [button,setButton]=useState(false)
  const jwdtoken = Cookies.get('jwttoken')
  const [Errormessage,setErrormessage]=useState("")
  const [isError,setIsError]=useState(false)
  
  
  useEffect(() => {
  if (jwdtoken !== undefined) {
    navigate('/home');
  }
}, [jwdtoken, navigate]);



  const displayingerror=(message)=>{
    setErrormessage(message)
  }
  const  authentication =(event)=> {
    event.preventDefault()
    async function fn(){
      const setting = {
      "username":username,
      "password":pass
      }
      const inserting = {
        method:"post",
        body:JSON.stringify(setting)
      }
      const url="https://apis.ccbp.in/login"
      const data =await fetch(url,inserting)
      const value = await data.json()
      console.log(value)
      if (data.ok==true){
        Cookies.set('jwttoken',value.jwt_token)
        navigate('/home')
      }
      else{
        setUsername("")
        setPass("")
        displayingerror(value.error_msg)
        setIsError(true)
      }


    }
    fn()
  }
 

  
   
  function HandleInput(){
    setCheck(prev=>!prev)
    
  }
  function HandlePassword(e){
    setPass(e.target.value)
  }
  useEffect(()=> {
    if ((username!=="") && (pass!=="")){
    setButton(true)
    }
    else{
      setButton(false)

    }
  },[username,pass])

  
  return (
    <form className='Login-Container' onSubmit={authentication}>
      <div className="Login-Con">
      <img src="https://res.cloudinary.com/dedmnd9gb/image/upload/v1751948449/6fad20838855997d164dd88d885fad87bdfa3be6_qwzvhr.png" className='login-image'/>
      <div className='Form-Container'>
        <div className='form-label'>
        <label>Username</label>
        <input type="text" className='type-text'  onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
        

        </div>
        <div className='form-label'>
        <label>Password</label>
        <input type={check ? 'text' : 'password'} className='type-password'  value={pass} onChange={HandlePassword}/>
        <input type='checkbox' className='checkbox' onChange={HandleInput} />
        <h3 className='show-pass'>Show Password</h3>
        <button className={button ? 'login-Btn' : 'login-btn'} >Login</button>
        {isError && <p className='login-error'>{Errormessage} </p>}

        </div>
      </div>


      </div>
      
    </form>
  )
}

export default Login

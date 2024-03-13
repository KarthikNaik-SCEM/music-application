import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const signUpInitials={
    name:"",
    username:"",
    password:""
    
}

const logInInitials={
    username:"",
    password:""
    
}

const LoginPage = () => {

    const nav = useNavigate()

    // const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account, setAccount] = useState('login');
    const [error, setError] = useState("")
    const [signUp, setSignUp] = useState(signUpInitials);
    const [login, setLogin] = useState(logInInitials);

    const toggleSignUp=()=>{
        if (account==='login')
        {
            setAccount("signup")
        }
        else{
            setAccount("login")
        }
    }

    const onInputChange=(e)=>{

        setSignUp({...signUp,[e.target.name]:e.target.value})
        setLogin({...login,[e.target.name]:e.target.value})

        
    }

    const handleSignUp =async ()=>{
        const {name,username,password}=signUp;

        if (name ===""|| username===""||password==="" ){
            setError("all fields should be filled")
            setTimeout(() => {
                setError("")
            }, 3000);
            return
        }

        const json= await fetch("http://localhost:3000/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,username,password})
        });

        const val=await json.json();

        if (val.success){
            localStorage.setItem("authToken",val.authToken);

            nav("/")

        }
        else{
            setError("username already exists");
            setTimeout(() => {
                setError("")
            }, 3000);
        }

    }

    const handleLogin=async()=>{
        // console.log(login)
        const {username,password}=login;

        if (username===""||password==="" ){
            setError("all fields should be filled")
            setTimeout(() => {
                setError("")
            }, 3000);
            return;
        }

        const json= await fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username,password})
        });

        const val=await json.json();

        if (val.success){
            localStorage.setItem("authToken",val.authToken);

            nav("/")

        }
        else{
            setError("username or password is incorrect");
            setTimeout(() => {
                setError("")
            }, 3000);
        }


    }

  return (
    <div className='flex flex-col w-1/3 py-10 px-24  shadow-xl mx-auto my-28'>

        {
            account==='login'?
            <>
                <div className='font-josefin text-3xl font-bold text-center'>
                K<span className='font-pacifico text-xl'>&</span>S
                </div>
                {error&&<div className='text-center text-red-600'>{error}</div>}
                <input type="text" onChange={(e)=>{onInputChange(e)}} name='username' placeholder='Enter username' className='border border-b-2 border-gray-400 border-x-0 border-t-0 my-3 focus:outline-none focus:ring-gray-300 focus:ring-2 duration-200'/>
                <input type="text" onChange={(e)=>{onInputChange(e)}} name='password' placeholder='Enter password' className='border border-b-2 border-gray-400 border-x-0 border-t-0 my-3 focus:outline-none focus:ring-gray-300 focus:ring-2 duration-200'/>

                <button className='bg-[#fcccff] rounded-full font-semibold border-2 border-black mt-4 py-2 hover:bg-[#faadff] duration-200' onClick={()=>{handleLogin()}}>Login</button>
                <p className='mx-auto my-2 text-slate-500'>OR</p>
                <br />
                <button className='text-black w-fit mx-auto underline underline-offset-2' onClick={()=>{toggleSignUp()}}>CREATE AN ACCOUNT</button>
            </>
                :
            <>
                <div className='font-josefin text-3xl font-bold text-center'>
                K<span className='font-pacifico text-xl'>&</span>S
                </div> 
                {error&&<div className='text-center text-red-600'>{error}</div>}               
                <input type="text" onChange={(e)=>{onInputChange(e)}} name='name' placeholder='Enter name' className='border border-b-2 border-gray-400 border-x-0 border-t-0 my-3 focus:outline-none focus:ring-gray-300 focus:ring-2 duration-200'/>
                <input type="text" onChange={(e)=>{onInputChange(e)}} name='username' placeholder='Enter username' className='border border-b-2 border-gray-400 border-x-0 border-t-0 my-3 focus:outline-none focus:ring-gray-300 focus:ring-2 duration-200'/>
                <input type="text" onChange={(e)=>{onInputChange(e)}} name='password' placeholder='Enter password' className='border border-b-2 border-gray-400 border-x-0 border-t-0 my-3 focus:outline-none focus:ring-gray-300 focus:ring-2 duration-200'/>

                <button className='text-black w-fit mx-auto underline underline-offset-2' onClick={()=>{toggleSignUp()}}>ALREADY HAVE AN ACCOUNT</button>
                <p className='mx-auto my-2 text-slate-500'>OR</p>
                <br />
                <button className='bg-[#fcccff] rounded-full font-semibold border-2 border-black mt-4 py-2 hover:bg-[#faadff] duration-200' onClick={()=>{handleSignUp()}}>Sign in</button>
            </>
        }
    </div>
  )
}

export default LoginPage
import Image from "next/image";
import Head from "next/head";
import{FaFacebook,FaLinkedin,FaGoogle,FaRegEnvelope}from 'react-icons/fa';
import{MdLockOutline}from 'react-icons/md';

export default function Home() {
  return (
    <div className="flex flex-col items-center  justify-center  min-h-screen  py-2 bg-gray-100">

<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>

<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
  <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
<div className= "w-3/5 p-5">
<div className="text-left font-bold">
  <span className="text-green-500">Confyans</span>
</div>
<div className="py-4">
  <h2 className="text-2xl font-bold text-green-500 mb-2">
    SignIn to your account
  </h2>
  <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
  <div className=" flex justify-center my-2 ">
    <a href="#" className="border-2 border-gray-500 rounded-full p-3 mx-1" >
      < FaFacebook className="mr-3 w-8 h-8"/>
    </a>
    <a href="#" className="border-2 border-gray-500 rounded-full p-3 mx-1" >
      < FaLinkedin className="mr-3 w-8 h-8"/>
    </a>
    <a href="#" className="border-2 border-gray-500 rounded-full p-3 mx-1" >
      < FaGoogle className="mr-3  w-8 h-8"/>
    </a>
    </div> {/*  SOCIAL LOGINS SECTION */}
    <p className="text-sm text-gray-400 my-2">or use your email account</p>
    <div className="flex flex-col items-center justify-center my-2">
      <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><FaRegEnvelope className="text-gray-400 m-2"/>
      <input type="text" placeholder="Email"  name="email" className="bg-gray-100 outline-none text-sm flex-1" /></div>

      <div className="bg-gray-100 w-64 p-2 flex items-center  mb-3"><MdLockOutline className="text-gray-400 m-2"/>
      <input type="password" placeholder="Password"  name="password" className="bg-gray-100 outline-none text-sm flex-1" /></div>

      <div className="flex w-64 mb-5">
        <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1" /> Remember me </label>
        <a href="#" className="text-xs ml-auto">Forgot Password?</a>
         </div>
         <a  href="#" className="border-2 border-green-500 text-green-500 rounded-full mt-4 py-2 px-12 inline-block font-bold hover:bg-green-500 hover:text-white ">Sign In</a>

    </div>
    

</div>
</div> 


{/*  signin */}

  <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl p-5 py-36 px-12">
  <h2 className="text-3xl font-extrabold mb-2">Hello friend</h2>
  <div className="border-2 w-10 border-white inline-block mb-2"></div>
  <p className="mb-2">Fill up personal details and start journey with us.</p>
  <a  href="#" className="border-2 border-white rounded-full mt-4 py-2 px-12 inline-block font-bold hover:bg-white hover:text-green-500 ">Sign Up</a>
  </div>
  {/*  signup */}

</div>

      </main>

    </div>
  );
}

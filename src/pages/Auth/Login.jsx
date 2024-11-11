import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='h-screen flex justify-center items-center bg-teal-50'>
            <div className="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>

                    <h3 className="mt-3 text-xl md:text-2xl font-semibold text-center text-black ">Welcome Back</h3>

                    <p className="mt-1 text-center text-gray-500 mb-8">Login to your account</p>

                    <form>
                        <div className="w-full my-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border-2 border-teal-700 rounded-lg focus:border-teal-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border-2 border-teal-700 rounded-lg focus:border-teal-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300" type="password" placeholder="Password" aria-label="Password" />
                        </div>

                        <div className="flex items-center justify-between mt-4 mb-8">
                            <a href="#" className="text-sm text-gray-600 ">Forget Password?</a>

                            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-700 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex-col items-center justify-center py-4 text-center bg-teal-600 ">
                    <div>
                        <span className="text-sm text-gray-50 ">Don't have an account? </span>
                        <Link to={"/auth/register"} className="text-sm font-bold text-white hover:underline">Register</Link>
                    </div>
                    <div className="mt-1">
                        <span className="text-sm text-gray-50 ">Back to </span>
                        <Link to={"/"} className="text-sm font-bold text-white hover:underline">Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

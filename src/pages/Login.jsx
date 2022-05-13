import React from 'react'
import { Footer, Navbar } from '../components'

export default function Login() {
    return (
        <div className='bg-gray-900'>
            <Navbar />
            <div className='max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
                <div className='container bg-white rounded p-5'>
                    <div className='text-center'>
                        <h1 className='font-bold text-xl'>Login</h1>
                    </div>
                    <form>
                        <div className='mt-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                                Username
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
                        </div>
                        <div className='mt-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                                Password
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='******************' />
                        </div>
                        <div className='mt-4'>
                            <button className='bg-sky-500 hover:bg-sky-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

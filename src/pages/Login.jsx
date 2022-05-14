import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import axios from '../config/axios'
import cookie from '../config/cookie'
import { Footer, Navbar } from '../components'

export default function Login() {
    const [isLoginError, setIsLoginError] = useState(false)
    const [isLoginSuccess, setIsLoginSuccess] = useState(false)

    const onSubmit = async (data) => {
        const body = {
            email: data.email,
            password: data.password
        }

        try {
            const response = await axios.post('/admin/login', body)

            if (response.data.message === 'Invalid credentials') {
                throw new Error(res.data.message)
            } else if (response.data) {
                cookie.createCookie(response.data.token)
                console.log(response.data)

                if (response.data.user.role === 'admin') {
                    setIsLoginSuccess(true)
                    setTimeout(() => {
                        window.location.href = '/admin/dashboard'
                    }, 1500)
                } else if (response.data.user.role === 'cashier') {
                    setIsLoginSuccess(true)
                    setTimeout(() => {
                        window.location.href = '/cashier/dashboard'
                    }, 1500)
                } else if (response.data.user.role === 'owner') {
                    setIsLoginSuccess(true)
                    setTimeout(() => {
                        window.location.href = '/owner/dashboard'
                    }, 1500)
                }
            }
        } catch (error) {
            setIsLoginError(true)
        }
    }

    const { handleSubmit, register } = useForm()

    return (
        <div className='bg-gray-900'>
            <Navbar />
            <div className='max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
                <div className='container bg-white rounded p-5'>
                    <div className='text-center'>
                        <h1 className='font-bold text-xl'>Login</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {isLoginError && (
                            <div className='mt-4 bg-red-500 p-3 rounded'>
                                <p className='text-white text-sm font-bold'>Email atau password salah, silakan coba kembali!</p>
                            </div>
                        )}
                        {isLoginSuccess && (
                            <div className='mt-4 bg-green-500 p-3 rounded'>
                                <p className='text-white text-sm font-bold'>Login Sukses, Selamat datang kembali!</p>
                            </div>
                        )}
                        <div className='mt-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                Email
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' name='email' type='email' placeholder='Email' required {...register('email', { required: true })} />
                        </div>
                        <div className='mt-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                                Password
                            </label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' name='password' type='password' placeholder='******************' required {...register('password', { required: true })} />
                        </div>
                        <div className='mt-4'>
                            <button className='bg-sky-500 hover:bg-sky-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
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

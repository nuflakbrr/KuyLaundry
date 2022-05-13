import React from 'react'
import { Navbar } from '../components'

export default function Home() {
    return (
        <div className='bg-gray-900'>
            <Navbar />
            <section className='text-white body-font'>
                <div className='container px-5 py-24 mx-auto'>
                    <div className='text-center mb-20'>
                        <h1 className='sm:text-3xl text-2xl font-bold text-center title-font text-white mb-4'>Selamat Datang di <span className='text-sky-500'>Kuy</span>Laundry! 🚀</h1>
                    </div>
                    <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
                        <div className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-sky-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                                    <path d='M22 4L12 14.01l-3-3'></path>
                                </svg>
                                <span className='title-font font-medium text-black'>Menggunakan Stack MERN (MongoDB, Express, React, Node)</span>
                            </div>
                        </div>
                        <div className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-sky-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                                    <path d='M22 4L12 14.01l-3-3'></path>
                                </svg>
                                <span className='title-font font-medium text-black'>Login, dan Logout Karyawan</span>
                            </div>
                        </div>
                        <div className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-sky-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                                    <path d='M22 4L12 14.01l-3-3'></path>
                                </svg>
                                <span className='title-font font-medium text-black'>CRUD Karyawan (Admin)</span>
                            </div>
                        </div>
                        <div className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-sky-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                                    <path d='M22 4L12 14.01l-3-3'></path>
                                </svg>
                                <span className='title-font font-medium text-black'>CRUD Outlet (Admin)</span>
                            </div>
                        </div>
                        <div className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-sky-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                                    <path d='M22 4L12 14.01l-3-3'></path>
                                </svg>
                                <span className='title-font font-medium text-black'>CRUD Tipe Jasa Produk (Admin)</span>
                            </div>
                        </div>
                        <div className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-sky-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                                    <path d='M22 4L12 14.01l-3-3'></path>
                                </svg>
                                <span className='title-font font-medium text-black'>Register Pelanggan</span>
                            </div>
                        </div>
                        <div className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-sky-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                                    <path d='M22 4L12 14.01l-3-3'></path>
                                </svg>
                                <span className='title-font font-medium text-black'>Transaksi</span>
                            </div>
                        </div>
                        <div className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-sky-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                                    <path d='M22 4L12 14.01l-3-3'></path>
                                </svg>
                                <span className='title-font font-medium text-black'>Download Laporan</span>
                            </div>
                        </div>
                    </div>
                    <button className='flex mx-auto mt-16 text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 rounded text-lg'>
                        <a href='https://github.com/nuflakbrr/kuylaundry' target='_blank'>Source Code</a>
                    </button>
                </div>
            </section>
        </div>
    )
}

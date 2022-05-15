import React, { useState, useEffect } from 'react'

import axios from '../../config/axios'
import cookies from '../../config/cookie'
import { SidebarAdmin } from '../../components'

export default function Dashboard() {
    // Required State
    const [dataOutlet, setDataOutlet] = useState([])
    const [dataMember, setDataMember] = useState([])
    const [dataTransaction, setDataTransaction] = useState([])
    const [dataUser, setDataUser] = useState([])

    // Get Data from Cookie
    const cookie = cookies.getCookies()

    // Authorization Config
    let headerConfig = { Authorization: `Bearer ${cookie}` }

    // Get All Data Outlet from API
    useEffect(() => {
        axios.get('/outlet', { headers: headerConfig })
            .then(res => {
                setDataOutlet(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // Get All Data Member from API
    useEffect(() => {
        axios.get('/member', { headers: headerConfig })
            .then(res => {
                setDataMember(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // Get All Data Transaction from API
    useEffect(() => {
        axios.get('/transaction', { headers: headerConfig })
            .then(res => {
                setDataTransaction(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // Get All Data User from API
    useEffect(() => {
        axios.get('/admin', { headers: headerConfig })
            .then(res => {
                setDataUser(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <SidebarAdmin />
            <section className='bg-gray-900 md:ml-64 min-h-screen'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='w-full m-5'>
                            <h2 className='text-2xl font-semibold text-white'>Dashboard</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
                                <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className='text-2xl'>{dataOutlet.length}</p>
                                        <p>Outlet</p>
                                    </div>
                                </div>
                                <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className='text-2xl'>{dataMember.length}</p>
                                        <p>Pelanggan</p>
                                    </div>
                                </div>
                                <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className='text-2xl'>{dataTransaction.length}</p>
                                        <p>Traksaksi</p>
                                    </div>
                                </div>
                                <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className='text-2xl'>{dataUser.length}</p>
                                        <p>Karyawan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

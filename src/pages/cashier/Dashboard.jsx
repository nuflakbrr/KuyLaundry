import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'

import axios from '../../config/axios'
import cookies from '../../config/cookie'
import { SidebarCashier } from '../../components'

export default function Dashboard() {
    // Required State
    const [dataOutlet, setDataOutlet] = useState([])
    const [dataMember, setDataMember] = useState([])
    const [dataTransaction, setDataTransaction] = useState([])
    const [dataUser, setDataUser] = useState([])

    const [memberName, setMemberName] = useState('')
    const [adminName, setAdminName] = useState('')

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

    // Function to GET Member By Id
    const getMemberById = (memberId) => {
        const id = dataTransaction[0].memberId

        axios.get(`/member/${id}`, { headers: headerConfig })
            .then(res => {
                setMemberName(res.data.data.name)
            })
            .catch(err => {
                console.log(err)
            })

        return memberName
    }

    // Function to GET Admin By Id
    const getAdminById = (adminId) => {
        const id = dataTransaction[0].adminId

        axios.get(`/admin/${id}`, { headers: headerConfig })
            .then(res => {
                setAdminName(res.data.data.name)
            })
            .catch(err => {
                console.log(err)
            })

        return adminName
    }

    // Function Format Date from API
    const formatDate = (date) => {
        let newDate = new Date(date)
        let day = newDate.getDate()
        let month = newDate.getMonth() + 1
        let year = newDate.getFullYear()
        return `${day}/${month}/${year}`
    }

    return (
        <>
            <SidebarCashier />
            <section className='bg-gray-900 md:ml-64 min-h-screen'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='w-full p-10'>
                            <h2 className='text-2xl font-semibold text-white'>Dashboard</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 py-5 gap-4'>
                                <div className='bg-sky-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-white text-white font-medium group'>
                                    <div className='flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12'>
                                        <svg width='30' height='30' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='stroke-current text-slate-800 transform transition-transform duration-500 ease-in-out'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                                        </svg>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-2xl'>{dataOutlet.length}</p>
                                        <p>Total Outlet</p>
                                    </div>
                                </div>
                                <div className='bg-sky-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-white text-white font-medium group'>
                                    <div className='flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12'>
                                        <svg width='30' height='30' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='stroke-current text-slate-800 transform transition-transform duration-500 ease-in-out'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                                        </svg>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-2xl'>{dataMember.length}</p>
                                        <p>Total Member</p>
                                    </div>
                                </div>
                                <div className='bg-sky-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-white text-white font-medium group'>
                                    <div className='flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12'>
                                        <svg width='30' height='30' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='stroke-current text-slate-800 transform transition-transform duration-500 ease-in-out'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                                        </svg>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-2xl'>{dataTransaction.length}</p>
                                        <p>Total Traksaksi</p>
                                    </div>
                                </div>
                                <div className='bg-sky-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-white text-white font-medium group'>
                                    <div className='flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12'>
                                        <svg width='30' height='30' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='stroke-current text-slate-800 transform transition-transform duration-500 ease-in-out'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                                        </svg>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-2xl'>{dataUser.length}</p>
                                        <p>Total Petugas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full p-10'>
                            <div className='flex items-center justify-between pb-6'>
                                <div>
                                    <h2 className='text-white text-2xl font-semibold'>Daftar Transaksi</h2>
                                </div>
                                <div className='flex flex-wrap items-center justify-between'>
                                    {/* <div className='flex bg-gray-50 items-center p-2 rounded-md'>
                                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-400' viewBox='0 0 20 20'
                                            fill='currentColor'>
                                            <path fill-rule='evenodd'
                                                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                                                clip-rule='evenodd' />
                                        </svg>
                                        <input className='bg-gray-50 outline-none ml-1 block ' type='text' name='' id='' placeholder='search...' />
                                    </div> */}
                                    <div className='lg:ml-40 ml-10 space-x-8'>
                                        <Link to='/cashier/transaction' className='flex items-center justify-center bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer'><FaCartPlus className='mr-2' /> Tambah Transaksi</Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                                        <table className='min-w-full leading-normal'>
                                            <thead>
                                                <tr>
                                                    <th
                                                        className='px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                                                        No
                                                    </th>
                                                    <th
                                                        className='px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                                                        Nama Member
                                                    </th>
                                                    <th
                                                        className='px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                                                        Tanggal
                                                    </th>
                                                    <th
                                                        className='px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                                                        Tanggal Selesai
                                                    </th>
                                                    <th
                                                        className='px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                                                        Tanggal Bayar
                                                    </th>
                                                    <th
                                                        className='px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                                                        Status Pembayaran
                                                    </th>
                                                    <th
                                                        className='px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                                                        Status Pengerjaan
                                                    </th>
                                                    <th
                                                        className='px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                                                        Nama Petugas
                                                    </th>
                                                    <th
                                                        className='px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dataTransaction.map((val, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                                <div className='flex items-center'>
                                                                    <p className='text-gray-900 whitespace-no-wrap'>
                                                                        {index + 1}
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                                <div className='flex items-center'>
                                                                    <div className='flex-shrink-0 w-10 h-10'>
                                                                        <img className='w-full h-full rounded-full'
                                                                            src='https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg'
                                                                            alt='Member Profile Picture' />
                                                                    </div>
                                                                    <div className='ml-3'>
                                                                        <p className='text-gray-900 whitespace-no-wrap'>
                                                                            {getMemberById(val.memberId)}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                                <div className='flex items-center'>
                                                                    <p className='text-gray-900 whitespace-no-wrap'>
                                                                        {formatDate(val.date)}
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                                <div className='flex items-center'>
                                                                    <p className='text-gray-900 whitespace-no-wrap'>
                                                                        {formatDate(val.deadline)}
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                                <div className='flex items-center'>
                                                                    <p className='text-gray-900 whitespace-no-wrap'>
                                                                        {formatDate(val.datePayment)}
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                                <div className='flex items-center'>
                                                                    {val.statusPayment === 'unpaid' ? (
                                                                        <p className='bg-red-500 px-2 py-0.5 rounded-xl text-white font-bold whitespace-no-wrap'>
                                                                            Belum Lunas
                                                                        </p>
                                                                    ) : (
                                                                        <p className='bg-green-500 px-2 py-0.5 rounded-xl text-white font-bold whitespace-no-wrap'>
                                                                            Lunas
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </td>
                                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                                <div className='flex items-center'>
                                                                    {val.status === 'pending' ? (
                                                                        <p className='bg-yellow-500 px-2 py-0.5 rounded-xl text-white font-bold whitespace-no-wrap'>
                                                                            Proses
                                                                        </p>
                                                                    ) : val.status === 'done' ? (
                                                                        <p className='bg-green-500 px-2 py-0.5 rounded-xl text-white font-bold whitespace-no-wrap'>
                                                                            Selesai
                                                                        </p>
                                                                    ) : val.status === 'canceled' ? (
                                                                        <p className='bg-red-500 px-2 py-0.5 rounded-xl text-white font-bold whitespace-no-wrap'>
                                                                            Dibatalkan
                                                                        </p>
                                                                    ) : (
                                                                        <p className='bg-blue-500 px-2 py-0.5 rounded-xl text-white font-bold whitespace-no-wrap'>
                                                                            Mengantri
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </td>
                                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                                <div className='flex items-center'>
                                                                    <div className='flex-shrink-0 w-10 h-10'>
                                                                        <img className='w-full h-full rounded-full'
                                                                            src='https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg'
                                                                            alt='Member Profile Picture' />
                                                                    </div>
                                                                    <div className='ml-3'>
                                                                        <p className='text-gray-900 whitespace-no-wrap'>
                                                                            {getAdminById(val.adminId)}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                                <Link to={`/admin/transaction/edit/${val._id}`} className='bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer'>Ubah</Link>
                                                                <span className='px-2'>|</span>
                                                                <Link to={`/admin/transaction/delete/${val._id}`} className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer'>Hapus</Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
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

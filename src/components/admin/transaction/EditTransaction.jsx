import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FaEdit, FaTrash } from 'react-icons/fa'

import axios from '../../../config/axios'
import cookies from '../../../config/cookie'
import { SidebarAdmin } from '../../'

export default function EditTransaction() {
    // Required State
    const [data, setData] = useState([])
    const [dataDetail, setDataDetail] = useState([])

    const [isUpdateTransactionError, setIsUpdateTransactionError] = useState()
    const [isUpdateTransactionSuccess, setIsUpdateTransactionSuccess] = useState()

    // Get Data from Cookie
    const cookie = cookies.getCookies()

    // GET Id from URL
    const id = window.location.pathname.split('/')[4]

    // Authorization Config
    let headerConfig = { Authorization: `Bearer ${cookie}` }

    // GET Data Transaction from Params
    useEffect(() => {
        axios.get(`/transaction/${id}`, { headers: headerConfig })
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // GET Data Transaction Detail from Params
    useEffect(() => {
        axios.get(`/transaction-detail/${id}`, { headers: headerConfig })
            .then(res => {
                setDataDetail(res.data.data[0])
                console.log(res.data.data[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // Function Format Date from API
    const formatDate = (date) => {
        let newDate = new Date(date)
        let day = newDate.getDate()
        let month = newDate.getMonth() + 1
        let year = newDate.getFullYear()
        return `${day}/${month}/${year}`
    }

    // Array StatusPayment For Select
    const statusPayment = [
        { statusPayment: 'unpaid', title: 'unpaid' }, { statusPayment: 'paid', title: 'paid' }
    ]

    // Array Status For Select
    const status = [
        { status: 'pending', title: 'pending' }, { status: 'done', title: 'done' }, { status: 'canceled', title: 'canceled' }
    ]

    // Define Validate form
    const { handleSubmit, register } = useForm()

    // PUT Data Transaction
    const onSubmit = async (data) => {
        const body = {
            datePayment: data.datePayment,
            statusPayment: data.statusPayment,
            status: data.status
        }

        try {
            const response = await axios.put(`/transaction/${id}`, body, { headers: headerConfig })

            if (response.data.message === 'Transaction not found') {
                throw new Error(response.data.message)
            } else if (response.data.message === 'Transaction updated successfully') {
                setIsUpdateTransactionSuccess(true)
                setTimeout(() => {
                    window.location.href = '/admin/dashboard'
                }, 1500)
            }
        } catch (error) {
            setIsUpdateTransactionError(true)
        }
    }

    // DELETE Data Transaction
    const dropTransaction = async () => {
        if (window.confirm('Apakah Anda yakin menghapus data ini?')) {
            try {
                const res = await axios.delete(`/transaction/${id}`, { headers: headerConfig })

                if (res.data.message === 'Transaction not found') {
                    throw new Error(res.data.message)
                } else if (res.data.message === 'Transaction deleted successfully') {
                    alert(res.data.message)
                    setIsUpdateTransactionSuccess(true)
                    setTimeout(() => {
                        window.location.href = '/admin/dashboard'
                    }, 1500)
                }

                // if (res.data.message === 'Transaction deleted successfully') {
                //     axios.delete(`/transaction-detail/${id}`, { headers: headerConfig })
                //         .then(res => {
                //             alert(res.data.message)
                //             setTimeout(() => {
                //                 window.location.href = '/admin/dashboard'
                //             }, 1500)
                //         })
                //         .catch(err => {
                //             console.log(err)
                //         })
                // }
            } catch (error) {
                setIsUpdateTransactionError(true)
            }
        }
    }

    return (
        <>
            <SidebarAdmin />
            <section className='bg-gray-900 md:ml-64 min-h-screen'>
                <div className='max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
                    <div className='container bg-white rounded p-5'>
                        <div className='text-center'>
                            <h1 className='font-bold text-xl'>Ubah Transaksi</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {isUpdateTransactionError && (
                                <div className='mt-4 bg-red-500 p-3 rounded'>
                                    <p className='text-white text-sm font-bold'>Maaf, gagal untuk mengubah data!</p>
                                </div>
                            )}
                            {isUpdateTransactionSuccess && (
                                <div className='mt-4 bg-green-500 p-3 rounded'>
                                    <p className='text-white text-sm font-bold'>Data transaksi berhasil diubah!</p>
                                </div>
                            )}
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='idTransaction'>
                                    Id Transaksi
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline' id='idTransaction' type='text' value={data._id} placeholder='Id Transaksi' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='memberId'>
                                    Id Member
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline' id='memberId' type='text' value={data.memberId} placeholder='memberId' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='date'>
                                    Tanggal Pemesanan
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline' id='date' type='text' value={formatDate(data.date)} placeholder='Tanggal Pemesanan' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='deadline'>
                                    Tanggal Selesai
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline' id='deadline' type='text' value={formatDate(data.deadline)} placeholder='Tanggal Selesai' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='datePayment'>
                                    Tanggal Bayar
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline' id='datePayment' type='text' value={formatDate(data.datePayment)} placeholder='Tanggal Bayar' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='datePayment'>
                                    Ganti Tanggal Bayar
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='datePayment' type='date' placeholder='Tanggal bayar' {...register('datePayment')} />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='statusPayment'>
                                    Status Bayar Saat Ini
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline' id='statusPayment' type='text' value={data.statusPayment} placeholder='Status Bayar Saat Ini' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='statusPayment'>
                                    Ganti Status Bayar
                                </label>
                                <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='statusPayment' name='statusPayment' {...register('statusPayment')}>
                                    <option defaultValue disabled>Pilih Role</option>
                                    {statusPayment.map((item, index) => {
                                        if (item.statusPayment === data.statusPayment) {
                                            return (
                                                <option key={index} value={item.statusPayment} selected>{item.title}</option>
                                            )
                                        } else {
                                            return (
                                                <option key={index} value={item.statusPayment}>{item.title}</option>
                                            )
                                        }
                                    })}
                                </select>
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='status'>
                                    Status Pengerjaan Saat Ini
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline' id='status' type='text' value={data.status} placeholder='Status Pengerjaan Saat Ini' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='status'>
                                    Ganti Status Pengerjaan
                                </label>
                                <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='status' name='status' {...register('status')}>
                                    <option defaultValue disabled>Pilih Role</option>
                                    {status.map((item, index) => {
                                        if (item.status === data.status) {
                                            return (
                                                <option key={index} value={item.status} selected>{item.title}</option>
                                            )
                                        } else {
                                            return (
                                                <option key={index} value={item.status}>{item.title}</option>
                                            )
                                        }
                                    })}
                                </select>
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='packageId'>
                                    Paket Jasa
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline' id='packageId' type='text' value={dataDetail.packageId} placeholder='Paket Jasa' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='quantity'>
                                    Kuantitas
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline' id='quantity' type='text' value={dataDetail.quantity} placeholder='Kuantitas' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='gender'>
                                    Id Petugas
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline' id='gender' type='text' value={data.adminId} placeholder='Id Petugas' disabled />
                            </div>
                            <div className='mt-4'>
                                <button className='flex items-center justify-center bg-sky-500 hover:bg-sky-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                                    <FaEdit className='mr-2 text-xl' /> Update Data
                                </button>
                            </div>
                        </form>
                        <div className='mt-4'>
                            <button className='flex items-center justify-center bg-red-500 hover:bg-red-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={dropTransaction}>
                                <FaTrash className='mr-2' /> Hapus Data
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FaUserEdit, FaTrash } from 'react-icons/fa'

import axios from '../../config/axios'
import cookies from '../../config/cookie'
import { SidebarAdmin } from '../'

export default function EditAdmin() {
    // Required State
    const [data, setData] = useState([])

    const [isUpdateAdminError, setIsUpdateAdminError] = useState()
    const [isUpdateAdminSuccess, setIsUpdateAdminSuccess] = useState()

    // Get Data from Cookie
    const cookie = cookies.getCookies()

    // GET Id from URL
    const id = window.location.pathname.split('/')[4]

    // Authorization Config
    let headerConfig = { Authorization: `Bearer ${cookie}` }

    // GET Data Admin from Params
    useEffect(() => {
        axios.get(`/admin/${id}`, { headers: headerConfig })
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // Array Role For Select
    const role = [
        { role: 'admin', title: 'Admin' }, { role: 'cashier', title: 'Kasir' }, { role: 'owner', title: 'Pemilik' }
    ]

    // PUT Data Admin
    const { handleSubmit, register } = useForm()

    const onSubmit = async (data) => {
        const body = {
            password: data.password,
            role: data.role
        }

        try {
            const response = await axios.put(`/admin/${id}`, body, { headers: headerConfig })

            if (response.data.message === 'Admin not found') {
                throw new Error(response.data.message)
            } else if (response.data.message === 'Admin updated successfully') {
                console.log(response.data.message)
                setIsUpdateAdminSuccess(true)
                setTimeout(() => {
                    window.location.href = '/admin/user'
                }, 1500)
            }
        } catch (error) {
            setIsUpdateAdminError(true)
        }
    }

    // DELETE Data Admin
    const dropAdmin = () => {
        if (window.confirm('Apakah Anda yakin menghapus data ini?')) {
            axios.delete(`/admin/${id}`, { headers: headerConfig })
                .then(res => {
                    console.log(res.data.message)
                    alert(res.data.message)
                    window.location.href = '/admin/user'
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    return (
        <>
            <SidebarAdmin />
            <section className='bg-gray-900 md:ml-64 min-h-screen'>
                <div className='max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
                    <div className='container bg-white rounded p-5'>
                        <div className='text-center'>
                            <h1 className='font-bold text-xl'>Ubah Petugas</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {isUpdateAdminError && (
                                <div className='mt-4 bg-red-500 p-3 rounded'>
                                    <p className='text-white text-sm font-bold'>Maaf, gagal untuk mengubah data!</p>
                                </div>
                            )}
                            {isUpdateAdminSuccess && (
                                <div className='mt-4 bg-green-500 p-3 rounded'>
                                    <p className='text-white text-sm font-bold'>Data admin berhasil diubah!</p>
                                </div>
                            )}
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                                    Id Petugas
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='id' type='text' value={data._id} placeholder='Id Petugas' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                                    Nama
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' value={data.name} placeholder='Nama' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='role'>
                                    Role
                                </label>
                                <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='role' name='role' {...register('role')}>
                                    <option defaultValue disabled>Pilih Role</option>
                                    {role.map((item, index) => {
                                        if (item.role === data.role) {
                                            return (
                                                <option key={index} value={item.role} selected>{item.title}</option>
                                            )
                                        } else {
                                            return (
                                                <option key={index} value={item.role}>{item.title}</option>
                                            )
                                        }
                                    })}
                                </select>
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                                    Email
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' value={data.email} placeholder='Email' disabled />
                            </div>
                            <div className='mt-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                                    Ganti Password
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='******************' {...register('password')} />
                            </div>
                            <div className='mt-4'>
                                <button className='flex items-center justify-center bg-sky-500 hover:bg-sky-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                                    <FaUserEdit className='mr-2 text-xl' /> Update Data
                                </button>
                            </div>
                        </form>
                        <div className='mt-4'>
                            <button className='flex items-center justify-center bg-red-500 hover:bg-red-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={dropAdmin}>
                                <FaTrash className='mr-2' /> Hapus Data
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

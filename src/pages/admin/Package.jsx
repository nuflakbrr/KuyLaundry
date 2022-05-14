import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from '../../config/axios'
import cookies from '../../config/cookie'
import { SidebarAdmin } from '../../components'

export default function Package() {
    // Required State
    const [data, setData] = useState([])

    // Get Data from Cookie
    const cookie = cookies.getCookies()

    // Get All Data Package from API
    let headerConfig = { Authorization: `Bearer ${cookie}` }

    useEffect(() => {
        axios.get('/package', { headers: headerConfig })
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <SidebarAdmin />
            <section className='bg-gray-900 md:ml-64 min-h-screen'>
                <div className="p-10 rounded-md w-full">
                    <div className=" flex items-center justify-between pb-6">
                        <div>
                            <h2 className="text-white text-2xl font-semibold">Daftar Paket Jasa</h2>
                        </div>
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="lg:ml-40 ml-10 space-x-8">
                                <Link to='/admin/package/add' className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Tambah Paket Jasa</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                Nama
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                Harga
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                Ubah
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((val, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className='flex items-center'>
                                                            {val.name === 'kiloan' && (
                                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                                    Kiloan
                                                                </p>
                                                            )}
                                                            {val.name === 'selimut' && (
                                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                                    Selimut
                                                                </p>
                                                            )}
                                                            {val.name === 'bedCover' && (
                                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                                    Bed Cover
                                                                </p>
                                                            )}
                                                            {val.name === 'kaos' && (
                                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                                    Kaos
                                                                </p>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className='flex items-center'>
                                                            <p className='text-gray-900 whitespace-no-wrap'>
                                                                Rp {val.price}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <Link to={`/admin/package/edit/${val._id}`} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Ubah</Link>
                                                        <span className='px-2'>|</span>
                                                        <Link to={`/admin/package/delete/${val._id}`} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Hapus</Link>
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
            </section>
        </>
    )
}

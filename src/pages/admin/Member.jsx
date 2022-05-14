import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from '../../config/axios'
import cookies from '../../config/cookie'
import { SidebarAdmin } from '../../components'

export default function Member() {
    // Required State
    const [data, setData] = useState([])

    // Get Data from Cookie
    const cookie = cookies.getCookies()

    // Get All Data Member from API
    let headerConfig = { Authorization: `Bearer ${cookie}` }

    useEffect(() => {
        axios.get('/member', { headers: headerConfig })
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
                            <h2 className="text-white text-2xl font-semibold">Daftar Member</h2>
                        </div>
                        <div className="flex flex-wrap items-center justify-between">
                            {/* <div className="flex bg-gray-50 items-center p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd" />
                                </svg>
                                <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
                            </div> */}
                            <div className="lg:ml-40 ml-10 space-x-8">
                                <Link to='/admin/member/add' className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Tambah Member</Link>
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
                                                Alamat
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                Jenis Kelamin
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-sky-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                Telepon
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
                                                            <div className="flex-shrink-0 w-10 h-10">
                                                                <img className="w-full h-full rounded-full"
                                                                    src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
                                                                    alt="Member Profile Picture" />
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                                    {val.name}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className='flex items-center'>
                                                            <p className='text-gray-900 whitespace-no-wrap'>
                                                                {val.address}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className='flex items-center'>
                                                            {val.gender === 'male' && (
                                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                                    Laki-Laki
                                                                </p>
                                                            )}
                                                            {val.gender === 'female' && (
                                                                <p className='text-gray-900 whitespace-no-wrap'>
                                                                    Perempuan
                                                                </p>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div className='flex items-center'>
                                                            <p className='text-gray-900 whitespace-no-wrap'>
                                                                {val.phone}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <Link to={`/admin/member/edit/${val._id}`} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Ubah</Link>
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

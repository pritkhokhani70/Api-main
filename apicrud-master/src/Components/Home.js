import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from './Loader'

export default function Home() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = () => {
            setTimeout(async () => {
                try {
                    const res = await
                        axios.get(`https://jsonplaceholder.typicode.com/users`)
                    console.log(res);
                    setData(res.data)
                    setLoading(false)
                } catch (err) {
                    console.log(err);
                    setLoading(false)
                }
            }, 1000)
        }
        fetchData()
    }, [])

    const DeleteHandler = async (id) => {
        console.log("Delete", id);

        const confirm = window.confirm("Would You Like To Delete?");
        if (confirm) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/users/` + id)
                window.location.reload(true)
                navigate('/')
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div>
            {
                loading ? (
                    <Loader></Loader>
                ) : (
                    <div className=' d-flex flex-column justify-content-center align-items-center bg-light'>
                        <h1>List Of Users</h1>

                        <div className=' w-75 rounded bg-white border shadow p-4 mb-5'>
                            <div className=' d-flex justify-content-end'>
                                <Link to='/create' className='btn btn-success fw-bold
                    '>Add +</Link>
                            </div>
                            <table className='table table-hover '>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((d, i) => (
                                            <tr key={i}>
                                                <td>{d.id}</td>
                                                <td>{d.name}</td>
                                                <td>{d.username}</td>
                                                <td>{d.email}</td>
                                                <td>{d.phone}</td>
                                                <td>
                                                    <Link to={`/read/${d.id}`} className=' btn btn-sm btn-info me-2 fw-bold'>Read</Link>
                                                    <Link to={`/update/${d.id}`} className=' btn btn-sm btn-primary me-2 fw-bold'>Edit</Link>
                                                    <Link className=' btn btn-sm btn-danger fw-bold' onClick={e => DeleteHandler(d.id)}>Delete</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
        </div>
    )
}

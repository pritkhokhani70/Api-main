import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    })
    
    const navigate = useNavigate()

    const SubmitHandler = (e) => {
        e.preventDefault()
        axios.post(`https://jsonplaceholder.typicode.com/users`, values)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className=' d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className=' w-50 bg-white shadow p-5 rounded '>
                <h1 className='text-center'>Add a User</h1>
                <form onSubmit={SubmitHandler}>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label fw-bold'>Name :</label>
                        <input type="text" name="name" id="name" className='form-control' placeholder='Enter Name' onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label fw-bold'>E-mail :</label>
                        <input type="email" name="email" id="email" className='form-control' placeholder='Enter E-mail' onChange={e => setValues({ ...values, email: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="number" className='form-label fw-bold'>Phone :</label>
                        <input type="number" name="phone" id="number" className='form-control' placeholder='Enter Phone Number' onChange={e => setValues({ ...values, phone: e.target.value })} />
                    </div>

                    <button className='btn btn-success fw-bold mt-2'>Submit</button>
                    <Link to='/' className='btn btn-primary ms-3 fw-bold mt-2'>Back</Link>
                </form>
            </div>
        </div>
    )
}

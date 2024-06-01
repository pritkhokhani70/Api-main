import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Loader from './Loader';

export default function Update() {
  const [data, setData] = useState([])
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    const updateData = () => {
      setTimeout(async () => {
        try {
          const res = await
            axios.get(`https://jsonplaceholder.typicode.com/users/` + id)
          console.log(res);
          setValues(res.data)
          setLoading(false)
        } catch (err) {
          console.log(err);
          setLoading(false)
        }
      }, 1000);
    }
    updateData()
  }, [])

  const UpdateHandler = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.put(`https://jsonplaceholder.typicode.com/users/` + id, values)
      console.log(res);
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {
        loading ? (
          <Loader></Loader>
        ) : (
          <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 bg-white shadow p-5 rounded'>
              <form onSubmit={UpdateHandler} >
                <h3 className='text-center mb-3'>Update User</h3>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">Name</label>
                  <input type="text" name='name' value={values.name} className="form-control" id="name" placeholder="Enter Name" onChange={e => setValues({ ...values, name: e.target.value })}></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input type="email" name='email' value={values.email} className="form-control" id="email" placeholder="Enter email" onChange={e => setValues({ ...values, email: e.target.value })}></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="number" className="form-label fw-bold">Phone</label>
                  <input type="text" name='phone' id="number" value={values.phone} className="form-control" placeholder="Enter Phone" onChange={e => setValues({ ...values, phone: e.target.value })}></input>
                </div>

                <div className='mb-3'>
                  <button className='btn btn-success fw-bold mt-3' type='submit'>Update</button>
                  <Link to="/" className='btn btn-primary ms-3 fw-bold mt-3'>Back</Link>
                </div>
              </form>
            </div>
          </div>
        )
      }
    </div>
  )
}

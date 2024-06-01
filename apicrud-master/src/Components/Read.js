import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from './Loader';


export default function Read() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const readData = () => {
      setTimeout(async () => {
        try {
          const res = await
            axios.get(`https://jsonplaceholder.typicode.com/users/` + id)
          console.log(res);
          setData(res.data)
          setLoading(false)
        } catch (err) {
          console.log(err);
          setLoading(false)
        }
      }, 1000)
    }
    readData()
  }, [])

  return (
    <div>
      {
        loading ? (
          <Loader></Loader>
        ) : (
          <div className=' d-flex w-100 vh-100 justify-content-center align-items-center bg-light '>
            <div className=' w-50 bg-white shadow p-5 rounded'>
              <h3 className=' mb-3 text-center'>Details of User</h3>
              <div className=' mb-2'>
                <strong>Name : {data.name}</strong>
              </div>

              <div className=' mb-2'>
                <strong>Email : {data.email}</strong>
              </div>

              <div className=' mb-2'>
                <strong>Phone : {data.phone}</strong>
              </div>

              <Link to={`/update/${id}`} className='btn btn-success mt-3 fw-bold'>Edit</Link>
              <Link to='/' className='btn btn-primary ms-3 mt-3 fw-bold'>Back</Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

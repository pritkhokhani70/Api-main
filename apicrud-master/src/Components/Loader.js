import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

export default function Loader() {
    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-center'>
                <ClipLoader
                    color="#000000"
                    size={100}
                />
            </div>
        </div>
    )
}

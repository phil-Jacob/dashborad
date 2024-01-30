import React from 'react'
import './style.css'

function Sidebar() {
  return (
    <div className='bg-white sidebar p-2'>
        <div className='m-2'>
            <i className=' me-3 fs-4'></i>
            <span className='brand-name fs-5'>Medico Sales</span>
        </div>
        <hr className='text-dark'></hr>
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
                <i className='bi bi-grid-fill fs-5 me-2'></i>
                <span >Dashboard</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-clipboard-check fs-5 me-3'></i>
                <span >LabTest</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-calendar2-check fs-5 me-3'></i>
                <span >Appointment</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-bag-check fs-5 me-3'></i>
                <span >Medical Order</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-envelope-check fs-5 me-3'></i>
                <span >Message</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-wallet2 fs-5 me-3'></i>
                <span >Payment</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-gear fs-5 me-3'></i>
                <span >Settings</span>
            </a>
        </div>
    </div>
  )
}

export default Sidebar;
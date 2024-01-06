import React from 'react'
import Dashboard from './Dashboard'
import "../components/cssfiles/Payment.css";
const Payment = () => {
    return (
        <div className='row'>
            <div className='col-1'>
                <Dashboard></Dashboard>
            </div>
            <div className='container-fluid col-11'>
                <h1 className='text-center'>Payment Page</h1>
            </div>
        </div>
    )
}

export default Payment
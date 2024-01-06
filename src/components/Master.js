import React, { useState } from 'react';
import Dashboard from './Dashboard';

const Master = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');

    const handleClick = (event) => {
        event.preventDefault();

        // Log the form values to the console
        console.log('Company Name:', companyName);
        console.log('Company Address:', companyAddress);
        setCompanyName('');
        setCompanyAddress('');
    };

    return (
        <div className='row'>
            <div className='col-1'>
                <Dashboard></Dashboard>
            </div>
            <div className='container-fluid col-11'>
                <div className='py-1'>
                    <div className="row py-4">
                        <div className="container-fluid col-sm-10 py-3 align-center">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className='text-center'>Company Information</h1>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label>Company Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Company name"
                                                        value={companyName}
                                                        onChange={(e) => setCompanyName(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label>Company Address</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Company Address"
                                                        value={companyAddress}
                                                        onChange={(e) => setCompanyAddress(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row py-3">
                                            <div className="col text-end">
                                                <button className="btn btn-success text-center w-50 m-1" onClick={handleClick}>ADD </button>
                                            </div>
                                            <div className="col">
                                                <button className="btn btn-danger w-50 m-1 " onClick={() => console.log('Cancel button clicked')}>Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="body">
                                    <table className="table table-success table-striped table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th >COMPANY NAME</th>
                                                <th>COMPANY ADDRESS</th>
                                                <th>ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Nitin</td>
                                                <td>Imade</td>
                                                <td>
                                                    <button className="btn btn-info mx-1">Update</button>
                                                    <button className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Master;

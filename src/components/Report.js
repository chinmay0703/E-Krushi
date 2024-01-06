import React from 'react'
import Dashboard from './Dashboard'

const Report = () => {
    return (
        <div className='row'>
            <div className='col-1'>
                <Dashboard></Dashboard>
            </div>
            <div className='container-fluid col-11'>
                <div className='py-1'>
                    <div className="row py-4">
                        <div className="container col-sm-10 py-3 align-center">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Vendor Information</h1>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label>Vendor Name</label>
                                                    <input type="text" className="form-control" placeholder="Enter Vendor name" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Vendor Email</label>
                                                    <input type="email" className="form-control" placeholder="Enter Vendor Email" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Pan</label>
                                                    <input type="number" className="form-control" placeholder="Enter Pan" />
                                                </div>
                                                <div className="form-group">
                                                    <label>FertilizerWLicenseNumber</label>
                                                    <input type="number" className="form-control" placeholder="Enter FertilizerWLicenseNumber" />
                                                </div>
                                                <div className="form-group">
                                                    <label>SeedLicenseNumber</label>
                                                    <input type="number" className="form-control" placeholder="Enter SeedLicenseNumber" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label>Vendor Address</label>
                                                    <input type="text" className="form-control" placeholder='Enter Vendor Address' />
                                                </div>
                                                <div className="form-group">
                                                    <label>GST Invoice</label>
                                                    <input type="number" className="form-control" placeholder="Enter GST Invoice" />
                                                </div>
                                                <div className="form-group">
                                                    <label>FertilizerRLicenseNumber</label>
                                                    <input type="number" className="form-control" placeholder="Enter FertilizerRLicenseNumber" />
                                                </div>
                                                <div className="form-group">
                                                    <label>FertilizerLicenseNumber</label>
                                                    <input type="number" className="form-control" placeholder="Enter FertilizerLicenseNumber" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Pincode</label>
                                                    <input type="number" className="form-control" placeholder="Enter Pincode" />

                                                </div>
                                                <div className="form-group">
                                                    <label>Contact</label>
                                                    <input type="number" className="form-control" placeholder="Enter Contact" />

                                                </div>

                                            </div>
                                        </div>
                                        <div className="row py-3">
                                            <div className="col text-end">
                                                <button className="btn btn-success text-center w-50 m-1">ADD </button>
                                            </div>
                                            <div className="col">
                                                <button className="btn btn-danger w-50 m-1 ">Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="body">
                                    <table className="table table-success table-striped table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th >VENDOR NAME</th>
                                                <th>VENDOR ADDRESS</th>
                                                <th>VENDOR EMAIL</th>
                                                <th>GST INVOICE</th>
                                                <th>PAN</th>
                                                <th>FERTILIZER-R-LINCENSE</th>
                                                <th>FERTILIZER-W-LINCENSE</th>
                                                <th>FERTILIZER-LINCENSE</th>
                                                <th>SEED LINCENSE</th>
                                                <th>PINCODE</th>
                                                <th>CONTACT</th>
                                                <th>ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Zoho</td>
                                                <td>2321</td>
                                                <td>20/3/2023</td>
                                                <td>3</td>
                                                <td>100</td>
                                                <td>100</td>
                                                <td>10</td>
                                                <td>CGST</td>
                                                <td>4533</td>
                                                <td>CGST</td>
                                                <td>4533</td>
                                                <td>
                                                    <button className="btn btn-info mx-1">Update</button>
                                                    <button className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>TCS</td>
                                                <td>2321</td>
                                                <td>20/3/2023</td>
                                                <td>3</td>
                                                <td>100</td>
                                                <td>100</td>
                                                <td>10</td>
                                                <td>SGST</td>
                                                <td>4533</td>
                                                <td>SGST</td>
                                                <td>4533</td>
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
    )
}

export default Report


// create pdf https://www.youtube.com/watch?v=TT1XMf5rhD0
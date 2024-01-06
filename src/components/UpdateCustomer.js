import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';

const UpdateCustomer = () => {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        customerName: '',
        mobile: '',
        address: '',
        pinCode: '',
        email: '',
        aadhar: '',
    });
    useEffect(() => {
        const id = localStorage.getItem("customerId");
        const fetchCustomerById = async () => {
            try {
                const response = await axios.get(`http://localhost:7071/api/v1/Customers/getbyid/${id}`);
                setCustomer(response.data);
            } catch (error) {
                console.error('Error fetching customer:', error.message);
            }
        };
        fetchCustomerById();
    }, []);

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    const handleNavigation = () => {
        // Pass your prop as an object to the state property
        navigate("/customer", { state: { yourProp: 1 } });
    };
    const handleUpdate = async (event) => {
        event.preventDefault();
        const id = localStorage.getItem("customerId");
        try {
            const response = await axios.put(`http://localhost:7071/api/v1/Customers/update/${id}`, customer, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Server Response:', response.data);
            setCustomer({
                customerName: '',
                mobile: '',
                address: '',
                pinCode: '',
                email: '',
                aadhar: '',
            });
            handleNavigation();



        } catch (error) {
            console.error('Error updating customer:', error.message);
        }
    };
    const cancel=()=>{
        navigate("/customer");
    }


    return (
        <div>

            <div className='row'>
                <div className='col-2'>
                    <Dashboard />
                </div>

                <div className='container-fluid col-10'>
                    <div className=''>
                        <div className="row ">
                            <div className="container-fluid col-sm-10 py-3 align-center">
                                <div className="card">
                                    <div className="card-header bg-dark">
                                        <h3 className='text-center text-white'>Update Customer</h3>
                                    </div>
                                    <div className="card-body">
                                        <form className='form'>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label>Customer Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Customer name"
                                                            name="customerName"
                                                            value={customer.customerName}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label>Mobile</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Mobile"
                                                            name="mobile"
                                                            value={customer.mobile}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Address"
                                                            name="address"
                                                            value={customer.address}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label>Pin Code</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Pin Code"
                                                            name="pinCode"
                                                            value={customer.pinCode}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Email"
                                                            name="email"
                                                            value={customer.email}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label>Aadhar</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Aadhar"
                                                            name="aadhar"
                                                            value={customer.aadhar}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row py-3">
                                                <div className="flex flex-wrap justify-content-center gap-3">

                                                    <Button label="Update" severity="success" raised onClick={handleUpdate} />
                                                    <Button label="Cancel" severity="danger" raised onClick={cancel} />

                                                </div>

                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    );
}

export default UpdateCustomer;



import { useState, useEffect, useRef } from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
// import DataTable from 'react-data-table-component';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const Customer = (props) => {
    const toast = useRef(null);
    const myDivRef = useRef(null);
    const useEffectCalled = useRef(false);
    const navigate = useNavigate();
    const location = useLocation();

    const [searchText, setSearchText] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [email, setEmail] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [customerList, setCustomerList] = useState([]);
    const [records, setRecords] = useState([]);

    const myname = location.state && location.state.name;

    useEffect(() => {
        if (myname === 1 && myDivRef.current) {
            myDivRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [myname]);

    const handleFilter = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText);
    };

    const handleFilteredRecords = records.filter((customer) =>
        customer.customerName.toLowerCase().includes(searchText.toLowerCase())
    );

    const yourPropValue = location.state && location.state.yourProp;
    useEffect(() => {
        if (!useEffectCalled.current) {
            fetchCustomerList();
            if (yourPropValue === 1) {
                showWarn();
            }
            useEffectCalled.current = true;
        }
    }, []);

    const fetchCustomerList = async () => {
        try {
            const response = await axios.get('http://localhost:7071/api/v1/Customers/getall');
            setRecords(response.data);
        } catch (error) {
            console.error('Error fetching customer list:', error.message);
        }
    };

    const handleUpdate = (customerId) => {
        localStorage.setItem('customerId', customerId);
        navigate('/update');
    };

    const handleDelete = async (customerId) => {
        try {
            await axios.delete(`http://localhost:7071/api/v1/Customers/delete/${customerId}`);
            showError();
            fetchCustomerList();
            console.log(`Customer with ID ${customerId} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting customer:', error.message);
        }
    };

    const handleClick = async (event) => {
        event.preventDefault();
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Customer Added', life: 3000 });

        const requestBody = {
            customerName: customerName,
            mobile: mobile,
            address: address,
            pinCode: pinCode,
            email: email,
            aadhar: aadhar,
        };

        try {
            const response = await axios.post('http://localhost:7071/api/v1/Customers/save', requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            fetchCustomerList();
            console.log('Server Response:', response.data);
            setCustomerName('');
            setMobile('');
            setAddress('');
            setPinCode('');
            setEmail('');
            setAadhar('');
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

    const cancel = () => {
        navigate("/dashh");
    };

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Customer Added', life: 3000 });
    };

    const showWarn = () => {
        toast.current.show({ severity: 'warn', summary: 'Warning', detail: 'Customer Updated', life: 3000 });
    };

    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Customer Deleted', life: 3000 });
    };


    return (
        <div className='back'>
            <div className='row '>
                <div className='col-2'>
                    <Dashboard />
                </div>
                <div className='container-fluid col-10'>
                    <div className=''>
                        <div className="row ">
                            <div className="container-fluid col-sm-10 py-3 align-center">
                                <div className="card">
                                    <div className="card-header bg-dark">
                                        <h3 className='text-center text-white'>Add New Customer</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label>Customer Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Customer name"
                                                            value={customerName}
                                                            onChange={(e) => setCustomerName(e.target.value)}
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
                                                            value={mobile}
                                                            onChange={(e) => setMobile(e.target.value)}
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
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
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
                                                            value={pinCode}
                                                            onChange={(e) => setPinCode(e.target.value)}
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
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
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
                                                            value={aadhar}
                                                            onChange={(e) => setAadhar(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row py-3">
                                                <div className="flex flex-wrap justify-content-center gap-3">

                                                    <Button label="Add" severity="success" raised onClick={handleClick} />
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
            <div className='row'>
                <div className='col-2 mx-5'></div>
                <div className='col-9'>

                    <div className="body">
                        <h3 className='text-center'>Customer List</h3>

                        <div className='car flex flex-wrap justify-content-left'>
                            <span className="p-input-icon-left">
                                <i className="pi pi-search jht" />
                                <InputText placeholder="Search" onChange={handleFilter} />
                            </span>

                        </div>
                        <div className='cardy' ref={myDivRef} >
                            <DataTable value={handleFilteredRecords} className="custom-datatable" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                                currentPageReportTemplate="{first} to {last} of {totalRecords}" >
                                <Column field="customerName" header="Name" sortable></Column>
                                <Column field="mobile" header="Mobile" sortable></Column>
                                <Column field="aadhar" header="Adhar" sortable></Column>
                                <Column field="email" header="Email" sortable></Column>
                                <Column field="pinCode" header="PinCode" sortable></Column>
                                <Column field="address" header="Address" sortable></Column>
                                <Column
                                    header="Actions"
                                    body={(rowData) => (
                                        <>
                                            <i
                                                className="pi pi-trash mx-1 my-2"
                                                style={{ fontSize: '1.2rem' }}
                                                onClick={() => handleDelete(rowData.customerId)}
                                                title="Delete Customer"
                                            ></i>

                                            <i className="pi pi-user-edit mx-1" style={{ fontSize: '1.2rem' }} onClick={() => handleUpdate(rowData.customerId)} title="Update Customer"></i>
                                        </>
                                    )}
                                ></Column>
                            </DataTable>
                        </div>

                    </div>
                    <Toast ref={toast} />
                </div>
            </div>
        </div>
    );
};

export default Customer;


import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import { Toast } from 'primereact/toast';
import Dashboard from './Dashboard';
import '../components/data.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Vendor = () => {
    const toast = useRef(null);
    const [records, setRecords] = useState([]);
    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Vendor Added', life: 3000 });
    };

    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Vendor Deleted', life: 3000 });
    };

    const [searchText, setSearchText] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [gstInvoice, setGstInvoice] = useState('');
    const [pan, setPan] = useState('');
    const [fertilizerRLicenseNumber, setFertilizerRLicenseNumber] = useState('');
    const [fertilizerWLicenseNumber, setFertilizerWLicenseNumber] = useState('');
    const [pesticideLicenseNumber, setPesticideLicenseNumber] = useState('');
    const [seedLicenseNumber, setSeedLicenseNumber] = useState('');
    const [pincode, setPincode] = useState('');
    const [contact, setContact] = useState('');
    const navigate = useNavigate();
    const [vendorList, setVendorList] = useState([]);


    const useEffectCalled = useRef(false);

    useEffect(() => {
        if (!useEffectCalled.current) {
            fetchVendorList();
            useEffectCalled.current = true;
        }
    }, []);

    const fetchVendorList = async () => {
        try {
            const response = await axios.get('http://localhost:7071/api/vendors/getall');
            setRecords(response.data);
        } catch (error) {
            console.error('Error fetching vendor list:', error.message);
        }
    };
    
    const handleDelete = async (vendorId) => {
        try {
            await axios.delete(`http://localhost:7071/api/vendors/delete/${vendorId}`);
            showError();
            fetchVendorList();
            console.log(`Vendor with ID ${vendorId} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting vendor:', error.message);
        }
    };
    const location = useLocation();
    const handleClick = async (event) => {
        event.preventDefault();
        showSuccess();
        const requestBody = {
            name: name,
            address: address,
            email: email,
            gstInvoice: gstInvoice,
            pan: pan,
            fertilizerRLicenseNumber: fertilizerRLicenseNumber,
            fertilizerWLicenseNumber: fertilizerWLicenseNumber,
            pesticideLicenseNumber: pesticideLicenseNumber,
            seedLicenseNumber: seedLicenseNumber,
            pincode: pincode,
            contact: contact,
        };

        try {
            const response = await axios.post('http://localhost:7071/api/vendors/save', requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            fetchVendorList();
            console.log('Server Response:', response.data);
            setName('');
            setAddress('');
            setEmail('');
            setGstInvoice('');
            setPan('');
            setFertilizerRLicenseNumber('');
            setFertilizerWLicenseNumber('');
            setPesticideLicenseNumber('');
            setSeedLicenseNumber('');
            setPincode('');
            setContact('');
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

    const handleFilter = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText);
    };

    const handleFilteredRecords = records.filter((vendor) =>
        vendor.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const cancel = () => {
        navigate("/dashh");
    }

    return (
        <div className='back'>
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
                                        <h3 className='text-center text-white'>Add New Vendor</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="name" className="form-label">Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            placeholder="Enter Vendor Name"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="address" className="form-label">Address</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="address"
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                            placeholder="Enter Vendor Address"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="email" className="form-label">Email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder="Enter Vendor Email"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="gstInvoice" className="form-label">GST Invoice</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="gstInvoice"
                                                            value={gstInvoice}
                                                            onChange={(e) => setGstInvoice(e.target.value)}
                                                            placeholder="Enter Vendor gstInvoice"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="pan" className="form-label">PAN</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="pan"
                                                            value={pan}
                                                            onChange={(e) => setPan(e.target.value)}
                                                            placeholder="Enter Vendor pan"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="contact" className="form-label">Contact</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="contact"
                                                            value={contact}
                                                            onChange={(e) => setContact(e.target.value)}
                                                            placeholder="Enter Vendor contact"
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-6">

                                                    <div className="mb-3">
                                                        <label htmlFor="fertilizerRLicenseNumber" className="form-label">Fertilizer License Number</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="fertilizerRLicenseNumber"
                                                            value={fertilizerRLicenseNumber}
                                                            onChange={(e) => setFertilizerRLicenseNumber(e.target.value)}
                                                            placeholder="Enter Vendor fertilizerRLicenseNumber"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="fertilizerWLicenseNumber" className="form-label">Fertilizer Wholesale License Number</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="fertilizerWLicenseNumber"
                                                            value={fertilizerWLicenseNumber}
                                                            onChange={(e) => setFertilizerWLicenseNumber(e.target.value)}
                                                            placeholder="Enter Vendor fertilizerWLicenseNumber"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="pesticideLicenseNumber" className="form-label">Pesticide License Number</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="pesticideLicenseNumber"
                                                            value={pesticideLicenseNumber}
                                                            onChange={(e) => setPesticideLicenseNumber(e.target.value)}
                                                            placeholder="Enter Vendor pesticideLicenseNumber"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="seedLicenseNumber" className="form-label">Seed License Number</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="seedLicenseNumber"
                                                            value={seedLicenseNumber}
                                                            onChange={(e) => setSeedLicenseNumber(e.target.value)}
                                                            placeholder="Enter Vendor seedLicenseNumber"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="pincode" className="form-label">Pincode</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="pincode"
                                                            value={pincode}
                                                            onChange={(e) => setPincode(e.target.value)}
                                                            placeholder="Enter Vendor pincode"
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
                        <h3 className='text-center'>Vendor List</h3>
                        <div className='car flex flex-wrap justify-content-left'>
                            <span className="p-input-icon-left">
                                <i className="pi pi-search jht" />
                                <InputText placeholder="Search" onChange={handleFilter} />
                            </span>

                        </div>
                        <div className='cardy'>
                            <DataTable value={handleFilteredRecords}  highlightOnHover tableStyle={{ minWidth: '50rem' }} className="custom-datatable" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} >
                                <Column field="name" header="Vendor Name" style={{ width: '20rem' }} sortable></Column>
                                <Column field="email" header="Email" sortable className='text-center'></Column>
                                <Column field="address" header="Address" sortable></Column>
                                <Column field="contact" header="Contact" sortable></Column>
                                <Column field="gstInvoice" header="GstInvoice" sortable></Column>
                                <Column field="fertilizerRLicenseNumber" header="FertilizerRLicense           Number" sortable ></Column>
                                <Column field="fertilizerWLicenseNumber" header="FertilizerWLicense                  Number" sortable></Column>

                                <Column field="pesticideLicenseNumber" header="PesticideLicense               Number" sortable></Column>
                                <Column field="seedLicenseNumber" header="SeedLicense                  Number" sortable></Column>
                                <Column field="pincode" header="PinCode" sortable></Column>

                                <Column
                                    header="Actions"
                                    body={(rowData) => (
                                        <>
                                            <i className="pi pi-trash mx-3 my-2" style={{ fontSize: '1.2rem' }} onClick={() => handleDelete(rowData.vId)}></i>

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

export default Vendor;

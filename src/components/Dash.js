
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Dash() {

    const navigate = useNavigate();
    const [customerrecords, setcustomerRecords] = useState([]);
    const [customerCount, setcustomerCount] = useState([]);
    const [itemrecords, setitemRecords] = useState([]);
    const [itemCount, setitemCount] = useState([]);

    useEffect(() => {
        fetchCustomerList();
        fetchItemList();
    }, []);

    const fetchCustomerList = async () => {
        try {
            const response = await axios.get('http://localhost:7071/api/v1/Customers/getall');
            setcustomerRecords(response.data);
            setcustomerCount(response.data.length);
        } catch (error) {
            console.error('Error fetching customer list:', error.message);
        }
    };
    const fetchItemList = async () => {
        try {
            const response = await axios.get('http://localhost:7071/api/v1/Items/getall');
            setitemRecords(response.data);
            setitemCount(response.data.length);
        } catch (error) {
            console.error('Error fetching item list:', error.message);
        }
    };
    const handleNavigationToItem = () => {

        navigate("/item", { state: { name: 1 } });
    };
    const  handleNavigationToCustomer = () => {

        navigate("/customer", { state: { name: 1 } });
    };
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <Dashboard></Dashboard>
                </div>
                <div className='col-10 '>
                    <div className="grid flex ">
                        <div className="col-4 md:col-4 lg:col-4 ">
                            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <a className="block text-500 font-medium mb-3" onClick={handleNavigationToItem}>Items</a>
                                        <div className="text-900 font-medium text-xl">{itemCount}</div>
                                    </div>
                                    <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                        <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                    </div>
                                </div>
                                <span className="text-green-500 font-medium">3 new </span>
                                <span className="text-500">from yesterday</span>
                            </div>
                        </div>
                        <div className="col-4 md:col-4 lg:col-4">
                            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">Profit</span>
                                        <div className="text-900 font-medium text-xl">0</div>
                                    </div>
                                    <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                        <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                                    </div>
                                </div>
                                <span className="text-green-500 font-medium">52% </span>
                                <span className="text-500">since last week</span>
                            </div>
                        </div>
                        <div className="col-4 md:col-4 lg:col-4">
                            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                                <div className="flex justify-content-between mb-3">
                                    <div>
                                        <a  className="block text-500 font-medium mb-3" onClick={handleNavigationToCustomer}>Customers</a >
                                        <div className="text-900 font-medium text-xl">{customerCount}</div>
                                    </div>
                                    <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                        <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                                    </div>
                                </div>
                                <span className="text-green-500 font-medium">20 </span>
                                <span className="text-500">newly registered</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

import React, { useState } from 'react';
import '../components/cssfiles/Dashboard.css';
import {
    faArrowDown, faArrowUp, faArrowRight,
    faCloud, faBook, faChartSimple, faCog, faBuildingShield,
    faSignOutAlt, faMoneyBillTransfer,
    faFileExcel, faCartShopping, faUser, faDashboard
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import df from "../Images/b.png";

function Dashboard() {
    const [isDashboardOpen, setDashboardOpen] = useState(true);
    const [isPurchaseDropdownOpen, setPurchaseDropdownOpen] = useState(false);

    const toggleDashboard = () => {
        setDashboardOpen(!isDashboardOpen);
    };

    const togglePurchaseDropdown = (e) => {
        e.preventDefault();
        setPurchaseDropdownOpen(!isPurchaseDropdownOpen);
    };
    const stopPropagation = (e) => {

        e.stopPropagation();
    };

    return (
        <div className={`dashboard ${isDashboardOpen ? 'open' : 'closed'}`}>
            <div className="navigation">

                {isDashboardOpen && (
                    <>
                        <ul >
                            
                            <img src={df} className='w-50 mx-5' alt='img not found'></img>
                            <li>
                                <Link to={"/dashh"}>
                                    <span className="icon"><FontAwesomeIcon icon={faDashboard} size='lg' /></span>
                                    <span className="title titlee " >Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/master"} onClick={togglePurchaseDropdown}>
                                    <span className="icon"><FontAwesomeIcon icon={faUser} size='lg' /></span>
                                    <span className="title mx-2" onClick={togglePurchaseDropdown}>Master</span>
                                    <span className="title mx-1">
                                        <FontAwesomeIcon icon={isPurchaseDropdownOpen ? faArrowUp : faArrowDown} className='mx-5' />
                                    </span>
                                    {isPurchaseDropdownOpen && (
                                        <ul className="dropdown-content py-2 px-5 ">
                                            <li>
                                                <Link to={"/vendor"} onClick={stopPropagation}><span className='titlee my-2 mx-4'><span className="horizontal-line"><FontAwesomeIcon icon={faArrowRight} style={{ color: 'white' }} /></span>Vendor</span></Link>
                                            </li>
                                            <li>
                                                <Link to={"/item"}> <span className='titlee my-2 mx-4'><span className="horizontal-line"><FontAwesomeIcon icon={faArrowRight} style={{ color: 'white' }} /></span>Item</span></Link>
                                            </li>
                                            <li>
                                                <Link to={"/customer"}> <span className='titlee my-2 mx-4'><span className="horizontal-line"><FontAwesomeIcon icon={faArrowRight} style={{ color: 'white' }} /></span>Customer</span></Link>
                                            </li>
                                        </ul>
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/purchase"}>
                                    <span className="icon"><FontAwesomeIcon icon={faCartShopping} size='lg' /></span>
                                    <span className="title titlee">Purchase</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/sale"}>
                                    <span className="icon"><FontAwesomeIcon icon={faChartSimple} size='lg' /></span>
                                    <span className="title titlee">Sale</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/payment"}>
                                    <span className="icon"><FontAwesomeIcon icon={faMoneyBillTransfer} size='lg' /></span>
                                    <span className="title titlee">Payment</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to={"/report"}>
                                    <span className="icon"><FontAwesomeIcon icon={faBook} size='lg' /></span>
                                    <span className="title">Report</span>
                                </Link>
                            </li> */}
                            <li>
                                <Link to={"/invoice"}>
                                    <span className="icon"><FontAwesomeIcon icon={faBook} size='lg' /></span>
                                    <span className="title titlee">Invoice</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/returnpolicy"}>
                                    <span className="icon"><FontAwesomeIcon icon={faBuildingShield} size='lg' /></span>
                                    <span className="title titlee">Return Policy</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/backup"}>
                                    <span className="icon"><FontAwesomeIcon icon={faCloud} size='lg' /></span>
                                    <span className="title titlee">Backup</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/uploadexcel"}>
                                    <span className="icon"><FontAwesomeIcon icon={faFileExcel} size='lg' /></span>
                                    <span className="title titlee">Upload Excel</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/setting"}>
                                    <span className="icon"><FontAwesomeIcon icon={faCog} size='lg' /></span>
                                    <span className="title titlee">Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/"}>
                                    <span className="icon"><FontAwesomeIcon icon={faSignOutAlt} size='lg' /></span>
                                    <span className="title titlee">Sign Out</span>
                                </Link>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}

export default Dashboard;

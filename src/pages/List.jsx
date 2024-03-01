import React from "react";
import Arraw from '../assets/arraw.png';
import { Link } from "react-router-dom";
import { appurl } from "../Helper";
const Page = () => {
    const List = [
        { name: "Phase-XII", date: 20240401 },
        { name: "CHSL", date: 20240601 },
        { name: "MTS", date: 20240701 },
        { name: "CGL", date: 20240901 },

        { name: "RRB Clerk  Pre", date: 20240803 },
        { name: "RRB Clerk  Main", date: 20241006 },
        { name: "RRB PO Pre", date: 20240803 },
        { name: "RRB PO Main", date: 20240929 },
        { name: "IBPS Clerk Pre", date: 20240824 },
        { name: "IBPS Clerk Main", date: 20241013 },
        { name: "IBPS PO Pre", date: 20241019 },
        { name: "IBPS PO Main", date: 20241130 },
        { name: "IBPS SO Pre", date: 20241109 },
        { name: "IBPS SO Main", date: 20241214 },
    ]
    function formatDate(inputDate) {
        const year = inputDate.substring(0, 4);
        const month = inputDate.substring(4, 6);
        const day = inputDate.substring(6, 8);

        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const monthName = months[parseInt(month, 10) - 1];

        const formattedDate = `${parseInt(day, 10)} ${monthName} ${year}`;

        return formattedDate;
    }
    function getFormattedDate() {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const day = currentDate.getDate().toString().padStart(2, '0');

        const formattedDate = `${year}${month}${day}`;

        return formattedDate;
    }
    const calculateDateDifference = (inputDate) => {
        const currentDate = new Date();
        const inputYear = parseInt(inputDate.substring(0, 4), 10);
        const inputMonth = parseInt(inputDate.substring(4, 6), 10) - 1;
        const inputDay = parseInt(inputDate.substring(6, 8), 10);
        const inputDateObj = new Date(inputYear, inputMonth, inputDay);
        const timeDifference = inputDateObj - currentDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    };
    const sortedList = List.slice().sort((a, b) => a.date - b.date);
    return (
        <>
            <div className='app-body'>
                <p className="title-page">Upcoming exam</p>
                <div className="list-body">
                    {sortedList.map((item, index) => (
                        <Link
                            key={index}
                            to={`${appurl}view/${item.name}/${item.date.toString()}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="list-box">
                                <div className="row d-flex align-items-center">
                                    <div className="col-7">
                                        <p className="mb-0 text-dark list-name">{item.name}</p>
                                        <p className="mb-0 text-dark">{formatDate(item.date.toString())}</p>
                                    </div>
                                    <div className="col-5 d-flex justify-content-end align-items-center">
                                        <span style={{ fontSize: '15px', color: '#000', fontWeight: '600' }}>{calculateDateDifference(item.date.toString()) > 0 ? calculateDateDifference(item.date.toString()) : 0} Days</span><img className="arraw-icon" style={{ marginLeft: '10px' }} height={15} width={15} src={Arraw}></img>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div>
                    <Link to={appurl + 'questioins'} className="w-100 btn btn-danger">Options</Link>
                </div>
            </div>
        </>
    )
};
export default Page;
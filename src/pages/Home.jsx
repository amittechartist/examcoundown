import React from 'react';
import Shape from '../assets/shape.svg';
import Homepng from '../assets/home.png';
import { Link, useParams } from 'react-router-dom';
import { appurl } from '../Helper';
function Home() {
    const { name, date } = useParams();
    function getFormattedDate() {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const day = currentDate.getDate().toString().padStart(2, '0');

        const formattedDate = `${year}${month}${day}`;

        return formattedDate;
    }
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
    const fulldays = formatDate(date);
    return (
        <>
            <div className='app-body'>
                <img src={Shape} className='page-shape'></img>
                <Link to={appurl}><img src={Homepng} className='home-btn'></img></Link>
                <div className='circle-ui'></div>
                <div className='head-title'>
                    <p className='exam-name'>{name}</p>
                    <p className='exam-date'>{fulldays}</p>
                </div>
                <div className='days-view'>
                    <p className='days-title'>d-day</p>
                    <p className='days'>{calculateDateDifference(date.toString()) > 0 ? calculateDateDifference(date.toString()) : 0}</p>
                </div>
            </div>
        </>
    );
}

export default Home;

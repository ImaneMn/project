import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './insuranceListe.css';
import { useNavigate } from "react-router-dom";

const InsuranceList = () => {

    const [insurances, setInsurance] = useState([])

    const navigate = useNavigate()

    const goToDetails = (id) => {
        console.log({ id })
        navigate(`/details/${id}`, { replace: true })
    }

    // useEffect(async () => {
    //     const res = await axios.get('http://127.0.0.1:8000/api/insurance')
    //     if (res.data) {
    //         setInsurance(res.data)
    //     }
    // }, [])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://127.0.0.1:8000/api/insurance`)
            if (res.data)
                setInsurance(res.data)
        })();
    }, []);

    return (
        < div className='insurance-list'>
            <h1>Show Insurances</h1>
            <div className='container-insurance'>
                {
                    insurances && insurances.map((insurance, index) => (
                        <div className='my-insurance-list' index={index} onClick={() => goToDetails(insurance.Policy_id)} >
                            <div>policy id: {insurance.Policy_id}</div>
                            <div>icustomer id: {insurance.Customer_id}</div>
                            <div>date of purchase: {insurance.Date_of_Purchase}</div>
                        </div>
                    )
                    )



                }</div>

        </div >
    );
};

export default InsuranceList;
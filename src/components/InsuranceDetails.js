import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import './insuranceDetails.css'


const InsuranceDetails = () => {
    const [insurance, setInsurance] = useState([])
    const { id } = useParams()
    console.log(id, 'details')

    const getInsuranceDetails = (async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/insurance/${id}`)
        if (res.data)
            setInsurance(res.data)
    });

    // useEffect(async () => {
    //     const res = await axios.get(`http://127.0.0.1:8000/api/insurance/${id}`)
    //     if (res.data)
    //         setInsurance(res.data)
    // }, [id])
    useEffect(
        () => {
            getInsuranceDetails()
        }, [id]
    )

    return (
        <div className='insurance-card'>



            <div className="site-card-border-less-wrapper">
                <Card
                    title={`Insurance ${id} page details`}
                    bordered={true}
                    headStyle={{
                        fontWeight: '700',
                        fontSize: '30px',
                        textAlign: 'center',
                    }}
                >
                    <p>{insurance.Policy_id} </p>
                    <p>{insurance.Date_of_Purchase}</p>
                    <p>{insurance.Customer_id}</p>
                    <p>{insurance.Fuel}</p>
                    <p>{insurance.VEHICLE_SEGMENT}</p>
                    <p>{insurance.Premium}</p>
                    <p>{insurance.bodily_injury_liability}</p>
                    <p>{insurance.personal_injury_protection}</p>
                    <p>{insurance.property_damage_liability}</p>
                    <p>{insurance.collision}</p>
                    <p>{insurance.comprehensive}</p>
                    <p>{insurance.Customer_Gender}</p>
                    <p>{insurance.Customer_Income_group}</p>
                    <p>{insurance.Customer_Region}</p>
                    <p>{insurance.Customer_Marital_status}</p>
                </Card>
            </div>



        </div>
        
    );
};


export default InsuranceDetails

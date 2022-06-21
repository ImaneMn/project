import React, { useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import '../App.css'

const Drawer = () => {

    const navigate = useNavigate()


    return (
        <div className='menu'>
            <button onClick={() => navigate('')}>Home</button>


        </div>

    );
};

export default Drawer;

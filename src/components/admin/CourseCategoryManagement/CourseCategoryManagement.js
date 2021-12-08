
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';


function CourseCategoryManagement() {
    const [loading, setLoading] = useState(true)
    const adminDetails = useSelector(state=>state.adminData)

  
    return (
        <>
 <p >Maintenance Mode</p>

      </>
    )
}

export default CourseCategoryManagement

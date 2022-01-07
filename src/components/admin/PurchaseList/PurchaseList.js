import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form, Row } from 'react-bootstrap';
import toast from "react-hot-toast"
import { Route, useHistory, Switch } from "react-router";

function PurchaseList() {
    const history = useHistory() 
    const [courses, setCourses] = useState([])
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false)
    const [bool, setBool] = useState(false)
    const [show, setShow] = useState(false);
    const [fieldValues, setFieldValues] = useState({
        name: '',
        author: '',
        duration: '',
        courseDescription: '',
        courseCategory: '',
        actualPrice: '',
        discountPrice: '',
        demoVideo: '',
        file: ''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    const adminDetails = useSelector(state => state.adminData)
    const courseDetails = useSelector(state => state.courseData)
    useEffect(() => {
       
            loadCourseData();
       
        loadCategory()

    }, [bool])

    const loadCourseData = async () => {
        setLoading(true)
        axios.get(process.env.REACT_APP_SERVER + '/admin/getPurchases', {
            headers: {
                authorization: "AdminJwt " + adminDetails.adminJwt,
            },
        }).then((response) => {
            if (response.data.error == false) {
                let courseData = response.data.data.reverse()
              

                console.log("daaata",response.data.data)
                setCourses(response.data.data)
           
            }
            setLoading(false)
        })

    }

    const loadCategory = async () => {
        try {
            let { data } = await axios.get(
                process.env.REACT_APP_SERVER + "/admin/getLiveCategories",
                {
                    headers: {
                        authorization: "AdminJwt " + adminDetails.adminJwt,
                    },
                }
            );
            if (data)
                setCategory(data.data);
        } catch (err) {
            toast.error("something went wrong");
        }
    };

    const viewUsers = async (id) => {

        history.push('/admin/purchasedUsers/'+id)

        //the course data is present in redux..filter the course from redux and put in the edit modal popup...

        // setLoading(true)
        // let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/DismissAdmin', { id: id }, {
        //     headers: {
        //         authorization: "AdminJwt " + adminDetails.adminJwt,
        //     },
        // })
        // loadCourseData();
        // setLoading(false)
        // setBool(!bool)


    }
    



  
    return (
        <>

            {loading ?
                <>    <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={100}
                    width={100}

                />
                </> : <>

                    

                    



                    <table class="table table-striped" id="userTable">

                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name of the course</th>
                                
                                <th scope="col">Total purchased users</th>
                                <th scope="col">View Users</th>

                            </tr>
                        </thead>
                        <tbody>
                            {courses.length > 0 ? courses.map((data, i) => {

                                return (

                                    <>

                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{data?.courseId?.courseName}</td>
                                            <td>{data.userList.length}</td>
                                           
                                            <td><button className="btn btn-danger" onClick={(e) => { viewUsers(data._id) }}> View Total Purchased Users</button></td>
                                        </tr>
                                    </>
                                )

                            }) : 'No Course Found!!!'}

                        </tbody>
                    </table>





                </>}



        </>
    )
}

export default PurchaseList

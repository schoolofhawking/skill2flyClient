import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form, Row } from 'react-bootstrap';
import toast from "react-hot-toast"
import { useParams, useHistory } from "react-router-dom";

function PurchasedUsersList() {
    const history = useHistory() 
    const [courses, setCourses] = useState([])
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false)
    const [bool, setBool] = useState(false)
    const [show, setShow] = useState(false);
    const params = useParams();
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
       
      
             loadData(params.id);
       


    }, [])

    const loadData = async (id) => {
        setLoading(true)
        axios.post(process.env.REACT_APP_SERVER + '/admin/getPurchaseDetails',{id:id}, {
            headers: {
                authorization: "AdminJwt " + adminDetails.adminJwt,
            }
        }).then((response) => {
            if (response.data.error == false) {
                let courseData = response.data.data.reverse()
              

                console.log("daaata",response.data.data[0].userList)
                 setCourses(response.data.data[0].userList)
           
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
                                <th scope="col">Name of the Purchased User</th>
                                
                                <th scope="col">email Id</th>
                                <th scope="col">phone Number</th>
                                <th scope="col">Payment Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses ? courses.map((data, i) => {

                                return (

                                    <>

                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{data?.userId.fullName}</td>
                                            <td>{data?.userId.email}</td>
                                            <td>{data?.userId?.mobileNumber}</td>
                                            <td>{data?.paymentId}</td>
                                         
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

export default PurchasedUsersList

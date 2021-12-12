import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { courseAction } from '../../../redux/rootActions';
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from 'react-redux';
import './SubCourse.css'
import { Modal, Button, Form } from 'react-bootstrap';
import toast from "react-hot-toast"
function SubCourse() {
    const [subCourse, setSubCourse] = useState([])
    const [loading, setLoading] = useState(false)
    const [bool, setBool] = useState(false)
    const [addShow, setAddShow] = useState(false);
    const [updateShow, setUpdateShow] = useState(false);
    const [addSub, setAddSub] = useState({
        mainCourseId: '',
        subCourseName: ''
    })
    const [updateSub, setUpdateSub] = useState({
        subCourseId: '',
        vimeoId: '',
        vimeoName: ''
    })


    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const adminDetails = useSelector(state => state.adminData)
    const courseDetails = useSelector(state => state.courseData)
    const dispatch = useDispatch()
    useEffect(() => {
        if (courseDetails.course.length < 1) {
            loadCourseData();
        }
        loadSubCourse()

    }, [bool])

    const loadCourseData = async () => {
        setLoading(true)
        axios.get(process.env.REACT_APP_SERVER + '/admin/getCourse', {
            headers: {
                authorization: "AdminJwt " + adminDetails.adminJwt,
            },
        }).then((response) => {
            if (response.data.error == false) {
                let courseData = response.data.data.reverse()
                //setCourse(courseData)
                let data = {
                    courseData
                }
                dispatch(courseAction(data))
            }
            setLoading(false)
        })

    }

    const loadSubCourse = async () => {
        try {
            let { data } = await axios.get(
                process.env.REACT_APP_SERVER + "/admin/getSubCourse",
                {
                    headers: {
                        authorization: "AdminJwt " + adminDetails.adminJwt,
                    },
                }
            );
            if (data) {
                setSubCourse(data.data);
            }
        } catch (err) {
            toast.error("something went wrong");
        }
    };

    const BlockUser = async (id) => {
        // setLoading(true)
        // let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/BlockUser', { id: id }, {
        //     headers: {
        //         authorization: "AdminJwt " + adminDetails.adminJwt,
        //     },
        // })
        // loadUserData();
        // setLoading(false)
        // setBool(!bool)
    }

    const unBlockUser = async (id) => {
        // setLoading(true)
        // let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/unBlockUser', { id: id }, {
        //     headers: {
        //         authorization: "AdminJwt " + adminDetails.adminJwt,
        //     },
        // })
        // loadUserData();
        // setLoading(false)
        // setBool(!bool)

    }

    const dismissAdmin = async (id) => {


        setLoading(true)
        let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/DismissAdmin', { id: id }, {
            headers: {
                authorization: "AdminJwt " + adminDetails.adminJwt,
            },
        })
        //loadUserData();
        setLoading(false)
        setBool(!bool)
    }
    const createSubCourse = async () => {
        setLoading(true)

        axios.post(process.env.REACT_APP_SERVER + '/admin/addSubCourse', addSub, {
            headers: {
                authorization: "AdminJwt " + adminDetails.adminJwt,
            },
        }).then((response) => {
            if (response.data.error == true) {
                toast.error(response.data.message)
            }
            else {
                toast.success(response.data.message)
                loadSubCourse();
                setAddShow(false)
            }
        })
        setLoading(false)

    }

    const handleChange = (name, type) => async (event) => {
        if (type == 'addSub') {
            setAddSub({ ...addSub, [name]: event.target.value })
        } else if (type == 'updateSub') {
            setUpdateSub({ ...updateSub, [name]: event.target.value })
        }

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

                    <Button variant="primary" onClick={() => setAddShow(!addShow)} className="float-right mb-2">
                        Add A New Sub-Course
                    </Button>

                    <Button variant="danger" onClick={() => setUpdateShow(!updateShow)} className="float-left mb-2">
                        Update A Sub-Course
                    </Button>
                    {/* At last change the btn name as Insert Video to Sub Course */}


                    {/* admin add modal */}

                    <Modal show={addShow} onHide={() => setAddShow(!addShow)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create a New Sub Course</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form>
                                <Form.Group className="m-2 pl-2">
                                    <Form.Label> Select Main Course</Form.Label><br></br>
                                    <Form.Select className='form-control' onChange={handleChange('mainCourseId', 'addSub')}>
                                        <option value="">Choose The Main Course  </option>
                                        {courseDetails.course.length > 0 ? courseDetails.course.map((data, i) => {
                                            return (
                                                <option value={data._id}>{data.courseName}</option>
                                            )
                                        }) : <option value="None">No Category Available</option>}

                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Sub-Course Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name of Sub Course" onChange={handleChange('subCourseName', 'addSub')} required />
                                </Form.Group>
                            </Form>

                            <Button variant="primary" type="submit" onClick={createSubCourse}>
                                Submit
                            </Button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setAddShow(!addShow)}>
                                Close
                            </Button>
                            {/* <Button variant="primary" type="submit" onClick={addNewAdmin}>
    Submit
  </Button> */}
                        </Modal.Footer>
                    </Modal>



                    <table class="table table-striped" id="userTable">

                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Sub-Course Name </th>
                                <th scope="col">Main Course Name</th>
                                <th scope="col">Video List</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subCourse.map((data, i) => {

                                return (

                                    <>
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{data.subCourseName}</td>
                                            <td>{data.mainCourseId.courseName}</td>
                                            <td><ul style={{margin:"0px"}}>{data.videoList.map((vid, i) => {
                                                return (
                                                    <li>{vid.videoId + "  - " + vid.videoName}</li>
                                                )
                                            })}</ul></td>

                                        </tr>
                                    </>
                                )

                            })}

                        </tbody>
                    </table>





                </>}



        </>
    )
}

export default SubCourse

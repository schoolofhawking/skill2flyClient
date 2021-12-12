import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from 'react-redux';
import { courseAction } from '../../../redux/rootActions';
import './CourseManagement.css'
import { Modal, Button, Form, Row } from 'react-bootstrap';
import toast from "react-hot-toast"
function CourseManagement() {
    const [course, setCourse] = useState([])
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
        if (courseDetails.course.length < 1) {
            loadCourseData();
        }
        loadCategory()

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

    const editCourse = async (id) => {

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
    const addNewCourse = async () => {
        setLoading(true)
        const formData = new FormData()
        let file = fieldValues.file
        if (file != '') {
            if (file.size < 2097152) {
                if ((file.type == 'image/jpeg') || (file.type == 'image/jpg') || (file.type == 'image/png')) {
                    formData.append("thumbnail", file)
                }
                else {
                    toast.error("Please Choose a Image File")
                    return setLoading(false)
                }
            } else {
                toast.error("Please Choose a File with size less than 2MB")
                return setLoading(false)
            }
        } else {
            toast.error('Please Select a File')
            return setLoading(false)
        }
        formData.append("name", fieldValues.name)
        formData.append("author", fieldValues.author)
        formData.append("duration", fieldValues.duration)
        formData.append("courseDescription", fieldValues.courseDescription)
        formData.append("courseCategory", fieldValues.courseCategory)
        formData.append("actualPrice", fieldValues.actualPrice)
        formData.append("discountPrice", fieldValues.discountPrice)
        formData.append("demoVideo", fieldValues.demoVideo)

        axios({
            url: process.env.REACT_APP_SERVER + "/admin/addCourse",
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: "AdminJwt " + adminDetails.adminJwt,
            },
            data: formData
        }).then((response) => {
            console.log(response);
            if (response.data.error) {

                toast.error(response.data.message)
            }
            else {
                toast.success(response.data.message)
                setShow(false)
                loadCourseData()
                setBool(!bool)
            }
        })
        setLoading(false)

    }



    const handleChange = (name) => async (event) => {
        if (name == 'thumbnail') {
            let img = event.target.files[0]
            if ((img.type == 'image/jpeg') || (img.type == 'image/jpg') || (img.type == 'image/png')) {
                document.getElementById('thumbnailPreview').src = URL.createObjectURL(img)
            }else{
                document.getElementById('thumbnailPreview').src=''
            }
            setFieldValues({ ...fieldValues, file: event.target.files[0] })

        } else {
            setFieldValues({ ...fieldValues, [name]: event.target.value })
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

                    <Button variant="primary" onClick={handleShow} className="float-right mb-2">
                        Add A New Course
                    </Button>


                    {/* admin add modal */}

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add A New Course</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form>
                                <Form.Group className=" mb-3 p-2" controlId="formBasicEmail">
                                    <Form.Label>Course Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Course Name" onChange={handleChange('name')} required />
                                </Form.Group>
                                <Row className='mb-3'>
                                    <Form.Group className="m-2 pl-2" controlId="formBasicEmail">
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Author" onChange={handleChange('author')} required />

                                    </Form.Group>
                                    <Form.Group className="m-2" controlId="formBasicPassword">
                                        <Form.Label>Duration</Form.Label>
                                        <Form.Control type="text" placeholder="Duration Eg: 3Hour 30Min" onChange={handleChange('duration')} required />
                                    </Form.Group>
                                </Row>




                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Enter a description for your Course</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter the Description"
                                        style={{ height: '100px' }}
                                        onChange={handleChange('courseDescription')}
                                    />

                                </Form.Group>

                                <Row className='mb-3'>
                                    <Form.Group className="m-2 pl-2">
                                        <Form.Label> Category of Course</Form.Label><br></br>
                                        <Form.Select className='form-control' onChange={handleChange('courseCategory')}>
                                            <option value="">Choose a New Category  </option>
                                            {category.length > 0 ? category.map((data, i) => {
                                                return (
                                                    <option value={data._id}>{data.categoryName}</option>
                                                )
                                            }) : <option value="None">No Category Available</option>}

                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="m-2" controlId="formBasicPassword">
                                        <Form.Label>Demo Video ID</Form.Label>
                                        <Form.Control type="number" placeholder="vimeo ID of Demo Video" onChange={handleChange('demoVideo')} required />
                                    </Form.Group>
                                </Row>

                                <Row className='mb-3'>
                                    <Form.Group className="pl-2 m-2" controlId="formBasicPassword">
                                        <Form.Label>Actual Price</Form.Label>
                                        <Form.Control type="number" placeholder="Enter The Actual Price" onChange={handleChange('actualPrice')} required />
                                    </Form.Group>

                                    <Form.Group className="pl-2 m-2">
                                        <Form.Label>Discounted Price</Form.Label>
                                        <Form.Control type="number" placeholder="Enter The Discount Price" onChange={handleChange('discountPrice')} required />
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3'>
                                    <Form.Group controlId="formFileMultiple" className="mb-3 w-50">
                                        <Form.Label>Select A Thumbnail Image</Form.Label>
                                        <Form.Control onChange={handleChange('thumbnail')} type="file" id="thumbnail" />
                                    </Form.Group>
                                    <div className='previewImg w-50' style={{ display: "flex", justifyContent: "center" }}>
                                        <img id='thumbnailPreview' style={{ width: "11vw" }} src=""></img>
                                    </div>
                                </Row>


                            </Form>

                            <Button variant="primary" type="submit" className="text-center" onClick={addNewCourse}>
                                Submit
                            </Button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            {/* <Button variant="primary" type="submit" onClick={addNewAdmin}>
    Submit
  </Button> */}
                        </Modal.Footer>
                    </Modal>



                    <table class="table" id="userTable">

                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Author</th>
                                <th scope="col">Discount %</th>
                                <th scope="col">Actual Price</th>
                                <th scope="col">Discount Price</th>
                                <th scope="col">Vimeo ID</th>
                                <th scope="col">Edit Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseDetails.course.length > 0 ? courseDetails.course.map((data, i) => {

                                return (

                                    <>

                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{data.courseName}</td>
                                            <td>{data.author}</td>
                                            <td>{data.discountPercentage + '%'}</td>
                                            <td>{'₹ ' + data.actualPrice}</td>
                                            <td>{'₹ ' + data.discountPrice}</td>
                                            <td>{data.demoVideo}</td>
                                            <td><button className="btn btn-danger" onClick={(e) => { editCourse(data._id) }}> Edit</button></td>
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

export default CourseManagement

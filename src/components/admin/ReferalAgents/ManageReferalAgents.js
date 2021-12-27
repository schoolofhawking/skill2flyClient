import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { courseAction } from '../../../redux/rootActions';
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form, Row } from 'react-bootstrap';
import toast from "react-hot-toast"
function ManageReferalAgents() {
    //This is used to Display all Sub Courses in Component
    const [agents, setAgents] = useState([])
    //This is used to Display Sub Courses of a Particular Main Course in Modal
    const [fieldValues, setFieldValues] = useState({

        name: '',
        phone: '',
        place:''
    
      })
    



    const adminDetails = useSelector(state => state.adminData)
    const courseDetails = useSelector(state => state.courseData)
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    
  const handleChange = (name) => async (event) => {
    setFieldValues({ ...fieldValues, [name]: event.target.value })
  }

  const addNewAgent=async()=>{


    let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/addNewAgent', {fieldValues}, {
        headers: {
          authorization: "AdminJwt " + adminDetails.adminJwt,
        },
      })
  }

  useEffect(async()=>{

    try{

   let {data}=await axios.get(process.env.REACT_APP_SERVER + '/admin/getAllAgents', {
        headers: {
          authorization: "AdminJwt " + adminDetails.adminJwt,
        },
      })
      console.log(data)
      setAgents(data.data)
    }
      catch(err)
      {
          toast.error("something wnt wrong")
      }
  },[])
    return (
        <>
        <Button variant="primary" onClick={handleShow} className="float-right">
      Add A New question
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A New Agent</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <Form.Group className="mb-3" >
    <Form.Label>Agent's full Name </Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={handleChange('name')}  required/>
  </Form.Group>
 
  

  <Form.Group className="mb-3" >
    <Form.Label>Phone Number </Form.Label>
    <Form.Control type="text" placeholder="Enter phone number" onChange={handleChange('phone')}  required/>
  </Form.Group>
</Form>

<Form.Group className="mb-3" >
    <Form.Label> Place / locality</Form.Label>
    <Form.Control type="text" placeholder="Enter place" onChange={handleChange('place')}  required/>
  </Form.Group>

<Button variant="primary" type="submit" onClick={addNewAgent}>
    Submit
  </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>


<table class="table" id="userTable">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
    
                <th scope="col">Phone Number</th>
                <th scope="col">Place</th>
                <th scope="col">Link</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((data, i) => {

                return (

                  <>
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{data.fullName}</td>
                      <td>{data.phoneNumber}</td>
                      <td>{data.place}</td>
                     
                      <td>{data.referLink}</td>

                    </tr>
                  </>
                )

              })}

            </tbody>
          </table>



        </>
    )
}

export default ManageReferalAgents




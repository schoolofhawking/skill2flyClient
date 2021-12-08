import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';
import './AdminManagement.css'
import { Modal, Button ,Form} from 'react-bootstrap';
import toast from "react-hot-toast"
function AdminManagement() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [bool, setBool] = useState(false)
  const [show, setShow] = useState(false);

 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const adminDetails = useSelector(state=>state.adminData)
  useEffect(() => {
    loadUserData();
  }, [bool])

  const loadUserData = async () => {
    setLoading(true)
    let { data } = await axios.get(process.env.REACT_APP_SERVER + '/admin/getAdmins', {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    setUsers(data.data)
    setLoading(false)
  }

  const BlockUser = async (id) => {
    setLoading(true)
    let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/BlockUser', { id: id }, {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    loadUserData();
    setLoading(false)
    setBool(!bool)
  }

  const unBlockUser = async (id) => {
    setLoading(true)
    let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/unBlockUser', { id: id }, {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    loadUserData();
    setLoading(false)
    setBool(!bool)

  }

  const dismissAdmin=async(id)=>{


    setLoading(true)
    let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/DismissAdmin', { id: id }, {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    loadUserData();
    setLoading(false)
    setBool(!bool)
  }
  const addNewAdmin=async()=>{



let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/addNewAdmin', { name:fieldValues.name,email: fieldValues.email,password:fieldValues.password }, {
  headers: {
    authorization: "AdminJwt " + adminDetails.adminJwt,
  },
})
console.log("last",data)
if(data.error)
{
  toast.error(data.message)
}
else
{
  toast.success(data.message)
  loadUserData();
  setShow(false)
}
  }

  const [fieldValues, setFieldValues] = useState({

    email: '',
    password: '',
    name:''

  })

  const handleChange = (name) => async (event) => {
    setFieldValues({ ...fieldValues, [name]: event.target.value })
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
        
        <Button variant="primary" onClick={handleShow} className="float-right">
      Add A New Admin
      </Button>


{/* admin add modal */}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A New Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Admin Name (fullName)</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={handleChange('name')}  required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handleChange('email')}  required/>
    <Form.Text className="text-muted">
      Beware! admin will have all rights!!!!!
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handleChange('password')} required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>


</Form>

<Button variant="primary" type="submit" onClick={addNewAdmin}>
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
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Type of Login</th>
                <th scope="col">status</th>
                <th scope="col">Block</th>
                <th scope="col">Dismiss Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((data, i) => {

                return (

                  <>
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{data.fullName}</td>
                      <td>{data.email}</td>
                      <td>{data.mobileNumber}</td>
                      <td>{data.loginType}</td>
                      <td>{data.isBlocked ? <>Blocked</> : <>Not Blocked</>}</td>
                      {data.isBlocked ? <>
                        <td><label class="switch">
                          <input type="checkbox" checked onChange={(e) => { unBlockUser(data._id) }} />
                          <span class="slider round"></span>
                        </label></td>
                      </> : <>
                        <td><label class="switch">
                          <input type="checkbox" onChange={(e) => { BlockUser(data._id) }} />
                          <span class="slider round"></span>
                        </label></td>
                      </>}
                      <td><button className="btn btn-danger" onClick={(e)=>{dismissAdmin(data._id)}}> Dismiss</button></td>
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

export default AdminManagement

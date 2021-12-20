import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';
import './ManageQuestion.css'
import { Modal, Button ,Form} from 'react-bootstrap';
import toast from "react-hot-toast"

function ManageQuestion() {
  const [questions, setQuestions] = useState([])
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
    let { data } = await axios.get(process.env.REACT_APP_SERVER + '/admin/getQuestions', {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    setQuestions(data.data)
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
  const AddNewQuestion=async()=>{



let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/addNewQuestion', {fieldValues}, {
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

    question: '',
    a: '',
    b:'',
    c: '',
    d:'',
    right:'',
    comments:''

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
      Add A New question
      </Button>


{/* admin add modal */}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A New Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>question  (fullstring)</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={handleChange('question')}  required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Option A</Form.Label>
    <Form.Control type="text" placeholder="Enter Option A" onChange={handleChange('a')}  required/>
 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Option B</Form.Label>
    <Form.Control type="text" placeholder="Enter Option B" onChange={handleChange('b')}  required/>
 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Option C</Form.Label>
    <Form.Control type="text" placeholder="Enter Option C" onChange={handleChange('c')}  required/>
 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Option D</Form.Label>
    <Form.Control type="text" placeholder="Enter Option D" onChange={handleChange('d')}  required/>
 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Right Answer (enter Option Letter !not answer)</Form.Label>
    <Form.Control type="text" placeholder="Enter Option A" onChange={handleChange('rightAnswer')}  required/>
 
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Any comments (optional)</Form.Label>
    <Form.Control type="text" placeholder="any comments" onChange={handleChange('comments')}  required/>
 
  </Form.Group>
</Form>

<Button variant="primary" type="submit" onClick={AddNewQuestion}>
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
                <th scope="col">qn</th>
                <th scope="col">answer</th>
                <th scope="col">comment</th>

              </tr>
            </thead>
            <tbody>
              {questions.map((data, i) => {

                return (

                  <>
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{data.question}</td>
                      <td>{data.correctAnswer}</td>
                      <td>{data.comments}</td>
                      {/* <td>{data.loginType}</td>
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
                      <td><button className="btn btn-danger" onClick={(e)=>{dismissAdmin(data._id)}}> Dismiss</button></td> */}
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

export default ManageQuestion

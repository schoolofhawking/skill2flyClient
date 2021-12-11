import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

function CourseCategoryManagement() {
  const [loading, setLoading] = useState(true);
  const adminDetails = useSelector((state) => state.adminData);
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    loadCategory();
  }, []);
  const [fieldValues, setFieldValues] = useState({

    categoryName: '',
    description1: '',
    description2:''

  })

  const loadCategory = async () => {
    try {
      let { data } = await axios.get(
        process.env.REACT_APP_SERVER + "/admin/getCategories",
        {
          headers: {
            authorization: "AdminJwt " + adminDetails.adminJwt,
          },
        }
      );
      if (data) 
      setCategories(data.data);
      console.log("!!!!!",data);
    } catch (err) {
      toast.error("something went wrong");
    }
  };

  const handleChange = (name) => async (event) => {
    setFieldValues({ ...fieldValues, [name]: event.target.value })
  }
  const submitCategory=async()=>{


  let {data}=  await axios.post( process.env.REACT_APP_SERVER + "/admin/addNewCategory",{fieldValues},
    {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    if(data.error)
    {

        toast.error(data.message)
    }
    else
    {
        toast.success(data.message)
        loadCategory();
        handleClose();
    }

  }


  const deactivateCategory = async (id) => {
    setLoading(true)
    let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/deactivateCategory', { id: id }, {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    loadCategory();

  }

  const activateCategory = async (id) => {
    setLoading(true)
    let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/activateCategory', { id: id }, {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    loadCategory();

  }


  return (
    <>
      <p>Create and Manage Course category from here</p>

      <Button variant="primary" onClick={handleShow} className="float-right">
        Add A New Category
      </Button>

      <table class="table" id="userTable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">description 1</th>
            <th scope="col">description 2</th>

            <th scope="col">status</th>
            <th scope="col">Deactivate</th>

          </tr>
        </thead>
        <tbody>
          {categories?.map((data, i) => {
            return (
              <>
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{data.categoryName}</td>
                  <td>{data.description1}</td>
                  <td>{data.description2}</td>
                  <td>{data.status=="1" ? <>active</> : <>Not active</>}</td>

                  {data.status=="1" ? <>
                        <td><label class="switch">
                          <input type="checkbox" onChange={(e) => {deactivateCategory(data._id) }} />
                          <span class="slider round"></span>
                        </label></td>
                      </> : <>
                        <td><label class="switch">
                          <input type="checkbox"checked onChange={(e) => { activateCategory(data._id) }} />
                          <span class="slider round"></span>
                        </label></td>
                      </>}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>


      
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A New Category For course</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Category Name</Form.Label>
    <Form.Control type="text" onChange={handleChange('categoryName')} placeholder="eg: computer science" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Enter a description for your category</Form.Label>
    <Form.Control
      as="textarea"
      placeholder="eg: grew up ur skills in cs"
      style={{ height: '100px' }}
      onChange={handleChange('description1')}
    />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Second description</Form.Label>
    <Form.Control
      as="textarea"
      placeholder="eg: get hired in mncs"
      style={{ height: '100px' }}
      onChange={handleChange('description2')}
    />
  </Form.Group>

</Form>

<Button variant="primary" type="submit" onClick={submitCategory}>
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



    </>
  );
}

export default CourseCategoryManagement;

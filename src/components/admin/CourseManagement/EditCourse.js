import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useParams ,useHistory} from "react-router-dom";
import { courseAction } from '../../../redux/rootActions';

function EditCourse() {
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false)
    const [courseDetailObject, setCourseDetail] = useState("")
    const params = useParams();
    const adminDetails = useSelector(state => state.adminData)
    const courseDetails = useSelector(state => state.courseData)
    const dispatch = useDispatch()
const history=useHistory()
    const [fieldValues,setFieldValues]=useState({

       courseName:'',
       author:'',
       courseDescription:"",
       demoVideo:"",
       discountPercentage:"",
       duration:"",
       discountPrice:"",
       id:""

    })
    useEffect(()=>{
        setLoading(true)

loadCourse(params.id)


    },[])

    const handleChange = (name) => async (event) => {
        setFieldValues({ ...fieldValues, [name]: event.target.value })
  
      }

    const loadCourse=async()=>{
        try{

await courseDetails.course.filter(course => course._id==params.id).map(data=>{

    setCourseDetail(data)
    console.log(data)

    setFieldValues({...fieldValues,"id":params.id, courseName:data.author,
author:data.author,
courseDescription:data.courseDescription,
demoVideo:data.demoVideo,
discountPercentage:data.discountPercentage,
duration:data.duration,
discountPrice:data.discountPrice
})
})

setLoading(false)
}
    catch(err)
    {

    }
    
    }

    const submitEdit=async()=>{


let {data}=await axios.put(process.env.REACT_APP_SERVER + '/admin/editCourse', {fieldValues }, {
    headers: {
      authorization: "AdminJwt " + adminDetails.adminJwt,
    },
  })

  if(data.error)
  {
      toast.error("something wnent wrong")
  }
  else
  {
      toast.success(data.message)
      loadCourseData();

history.push('/admin/courses')
  }
    }


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
                console.log("Heyy",data)
            }
            setLoading(false)
        })

    }


    return (
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Course name</Form.Label>
    <Form.Control type="text" placeholder="enter course name" value={fieldValues.courseName} onChange={handleChange('courseName')}/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>author</Form.Label>
    <Form.Control type="text" placeholder="Enter email"value={fieldValues.author} onChange={handleChange('author')} />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>courseDescription</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={fieldValues.courseDescription} onChange={handleChange('courseDescription')}/>
   
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>courseName</Form.Label>
    <Form.Control type="text" placeholder="Enter email"value={courseDetailObject.courseName} />
   
  </Form.Group> */}
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>demoVideo</Form.Label>
    <Form.Control type="text" placeholder="Enter email"value={fieldValues.demoVideo}  onChange={handleChange('demoVideo')}/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>discountPercentage</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={fieldValues.discountPercentage} onChange={handleChange('discountPercentage')}/>
   
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>discountPrice</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={fieldValues.discountPrice} onChange={handleChange('discountPrice')}/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>duration</Form.Label>
    <Form.Control type="text" placeholder="Enter email" value={fieldValues.duration} onChange={handleChange('duration')}/>
   
    </Form.Group>
  <Button variant="primary" onClick={submitEdit} >
    Edit Now
  </Button>
</Form>
        </div>
    )
}

export default EditCourse

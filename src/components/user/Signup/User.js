import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Contact from '../Contact/Contact'
import CourseList from '../CourseList/CourseList'
import Index from '../Index/Index'
import Profile from '../Profile/Profile'
import Signup from './Signup'
import SingleCourse from '../SingleCourse/SingleCourse'


function User() {
    return (
        <div>
             <Route  path="/" exact ><Index/> </Route> 
             <Route path="/signup"><Signup login={false}/></Route>
             <Route path="/login"><Signup login={true} /></Route>
             <Route path="/singlecourse"><SingleCourse /></Route>
             <Route path="/course"><CourseList /></Route>
             <Route path="/contact"><Contact /></Route>
             <Route path="/profile"><Profile /></Route>
        </div>
    )
}

export default User

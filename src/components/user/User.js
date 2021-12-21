import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from '../Error'
import Contact from './Contact/Contact'
import CourseList from './CourseList/CourseList'
import Index from './Index/Index'
import PaymentGateway from './PaymentGateway/PaymentGateway'
import Profile from './Profile/Profile'
import Questions from './Questions/Questions'
import Signup from './Signup/Signup'
import SingleCourse from './SingleCourse/SingleCourse'




function User() {
    return (
        <div>
            <Switch>
                <Route path="/" exact ><Index /> </Route>
                <Route path="/signup"><Signup login={false} /></Route>
                <Route path="/login"><Signup login={true} /></Route>
                <Route path="/course"><CourseList /></Route>
                <Route path="/contact"><Contact /></Route>
                <Route path="/profile"><Profile /></Route>
                <Route path="/singlecourse/:id"><SingleCourse /></Route>
                <Route path="/getting-started"><Questions/></Route>
                <Route exact path="/make-payment"><PaymentGateway/></Route>
                {/* <Route path="/*"><Error /></Route>  */}
            </Switch>

        </div>
    )
}

export default User

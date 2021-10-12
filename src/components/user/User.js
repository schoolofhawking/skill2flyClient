import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Index from './Index/Index'
import Signup from './Signup/Signup'


function User() {
    return (
        <div>
             <Route  path="/" exact >  <Index/> </Route> 
             <Route path="/signup"><Signup/></Route>
        </div>
    )
}

export default User

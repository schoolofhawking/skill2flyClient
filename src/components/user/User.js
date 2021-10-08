import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Index from './Index/Index'


function User() {
    return (
        <div>
             <Route  path="/" exact >  <Index/> </Route> 
        </div>
    )
}

export default User

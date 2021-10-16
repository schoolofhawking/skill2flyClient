import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dummy from './Dummy'
import Index from './Index/Index'
import Signup from './Signup/Signup'


function User() {
    return (
        <div>
             <Route  path="/" exact ><Index/> </Route> 
             <Route path="/signup"><Signup login={false}/></Route>
             <Route path="/login"><Signup login={true} /></Route>
           
        </div>
    )
}

export default User

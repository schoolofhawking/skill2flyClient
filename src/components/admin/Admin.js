import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './Layout/NavBar'

export default function Admin() {
    return (
        <div>
             <Route  path="/admin/demo" > <NavBar/> </Route> 
        </div>
    )
}

import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AdminLogin from './AdminLogin/AdminLogin'
import Sidebar from './Layout/Sidebar'
import UserManagement from './UserManagement/UserManagement'


export default function Admin() {
    return (
        <div>
             <Route  path="/admin/demo" > <Sidebar/> </Route>
             <Route path="/admin" exact><AdminLogin /></Route>
             <Route path="/admin/usermanagement" exact><Sidebar/></Route>
        </div>
    )
}

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from '../Error'
import AdminLogin from './AdminLogin/AdminLogin'
import Sidebar from './Layout/Sidebar'
import UserManagement from './UserManagement/UserManagement'


export default function Admin() {
    return (
        <div>
            <Switch>
                <Route path="/admin/demo" > <Sidebar /> </Route>
                <Route path="/admin" exact><AdminLogin /></Route>
                <Route path="/admin/usermanagement"><Sidebar /></Route>
                {/* <Route path="/admin/*"><Error /></Route> */}
            </Switch>
        </div>
    )
}

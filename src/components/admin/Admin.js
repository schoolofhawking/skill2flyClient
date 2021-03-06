import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from '../Error'
import AdminLogin from './AdminLogin/AdminLogin'
import Sidebar from './Layout/Sidebar'
import ManageQuestion from './QuestionManagement/ManageQuestion'
import ManageReferalAgents from './ReferalAgents/ManageReferalAgents'
import UserManagement from './UserManagement/UserManagement'


export default function Admin() {
    return (
        <div>
            <Switch>
                {/* <Route path="/admin/demo" > <Sidebar /> </Route> */}
                <Route path="/admin" exact><AdminLogin /></Route>
                <Route path="/admin/usermanagement"><Sidebar /></Route>
                <Route path="/admin/category"><Sidebar /></Route>
                <Route path="/admin/manageAdmin"><Sidebar /></Route>
                <Route path="/admin/courses"><Sidebar /></Route>
                <Route path="/admin/subCourse"><Sidebar /></Route>
                <Route path="/admin/editCourse/:id"><Sidebar /></Route>
                <Route path="/admin/questions"><Sidebar /></Route>
                <Route path="/admin/referals"><Sidebar /></Route>
                <Route path="/admin/Helps"><Sidebar /></Route>
                <Route path="/admin/purchase"><Sidebar /></Route>
                <Route path="/admin/purchasedUsers/:id"><Sidebar /></Route>
                {/* <Route path="/admin/*"><Error /></Route> */}
            </Switch>
        </div>
    )
}

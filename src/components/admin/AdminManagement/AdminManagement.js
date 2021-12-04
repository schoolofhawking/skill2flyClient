import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';
import './AdminManagement.css'
function AdminManagement() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [bool, setBool] = useState(false)
  const adminDetails = useSelector(state=>state.adminData)
  useEffect(() => {
    loadUserData();
  }, [bool])

  const loadUserData = async () => {
    setLoading(true)
    let { data } = await axios.get(process.env.REACT_APP_SERVER + '/admin/getAdmins', {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    setUsers(data.data)
    setLoading(false)
  }

  const BlockUser = async (id) => {
    setLoading(true)
    let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/BlockUser', { id: id }, {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    loadUserData();
    setLoading(false)
    setBool(!bool)
  }

  const unBlockUser = async (id) => {
    setLoading(true)
    let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/unBlockUser', { id: id }, {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    loadUserData();
    setLoading(false)
    setBool(!bool)

  }

  const dismissAdmin=async(id)=>{


    setLoading(true)
    let { data } = await axios.post(process.env.REACT_APP_SERVER + '/admin/DismissAdmin', { id: id }, {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })
    loadUserData();
    setLoading(false)
    setBool(!bool)

    
  }
  return (
    <>

      {loading ?
        <>    <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}

        />
        </> : <>
        
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>


{/* admin add modal */}

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>





          <table class="table" id="userTable">
        
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Type of Login</th>
                <th scope="col">status</th>
                <th scope="col">Block</th>
                <th scope="col">Dismiss Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((data, i) => {

                return (

                  <>
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{data.fullName}</td>
                      <td>{data.email}</td>
                      <td>{data.mobileNumber}</td>
                      <td>{data.loginType}</td>
                      <td>{data.isBlocked ? <>Blocked</> : <>Not Blocked</>}</td>
                      {data.isBlocked ? <>
                        <td><label class="switch">
                          <input type="checkbox" checked onChange={(e) => { unBlockUser(data._id) }} />
                          <span class="slider round"></span>
                        </label></td>
                      </> : <>
                        <td><label class="switch">
                          <input type="checkbox" onChange={(e) => { BlockUser(data._id) }} />
                          <span class="slider round"></span>
                        </label></td>
                      </>}
                      <td><button className="btn btn-danger" onClick={(e)=>{dismissAdmin(data._id)}}> Dismiss</button></td>
                    </tr>
                  </>
                )

              })}

            </tbody>
          </table>





        </>}



    </>
  )
}

export default AdminManagement

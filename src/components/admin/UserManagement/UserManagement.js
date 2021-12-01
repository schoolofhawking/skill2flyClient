import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from "react-loader-spinner";
import './userManagement.css'
function UserManagement() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [bool, setBool] = useState(false)
  useEffect(() => {
    loadUserData();
  }, [bool])

  const loadUserData = async () => {
    setLoading(true)
    let { data } = await axios.get(process.env.REACT_APP_SERVER + '/getUsers')
    setUsers(data.data)
    setLoading(false)
  }

  const BlockUser = async (id) => {
    setLoading(true)
    let { data } = await axios.post(process.env.REACT_APP_SERVER + '/BlockUser', { id: id })
    loadUserData();
    setLoading(false)
    setBool(!bool)
  }

  const unBlockUser = async (id) => {
    setLoading(true)
    let { data } = await axios.post(process.env.REACT_APP_SERVER + '/unBlockUser', { id: id })
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

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Type of Login</th>
                <th scope="col">status</th>
                <th scope="col">Block</th>
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

export default UserManagement

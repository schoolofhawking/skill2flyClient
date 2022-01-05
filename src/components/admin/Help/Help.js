import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';
import moment from 'moment'
function Help() {
  const [help, setHelp] = useState([])
  const [loading, setLoading] = useState(false)
  const [bool, setBool] = useState(false)
  const adminDetails = useSelector(state=>state.adminData)
  useEffect(() => {
    loadUserData();
  }, [bool])

  const loadUserData = async () => {
    setLoading(true)
    let { data } = await axios.get(process.env.REACT_APP_SERVER + '/admin/getHelps', {
      headers: {
        authorization: "AdminJwt " + adminDetails.adminJwt,
      },
    })

    console.log(data)
    setHelp(data.data)
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

          <table class="table" id="userTable">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Help requested By</th>
                <th scope="col">email</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {help.map((data, i) => {

                return (

                  <>
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{data.user.fullName}</td>
                      <td>{data.user.email}</td>
                      <td>{data.user.mobileNumber}</td>
                      <td>{moment(data.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
                     
                      

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

export default Help

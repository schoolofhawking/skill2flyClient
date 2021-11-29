import React from 'react'
import { useSelector } from 'react-redux'

export default function ProfilePicture() {
    const userData = useSelector(state => state.userData)
  const profileData = useSelector(state => state.profileData)
    return (
        <>
            <div className="col-lg-3">
              <div className="teacher-profile">
                <div className="teacher-thumb">
                  <div className="profile_wrap">
                    <img className="profile_img" src="assets/images/home2/teacher/1.png" alt="" />
                    <label for="profilePic" style={{paddingTop:"50%"}} className="profile_file" ><i id="postIcon" style={{fontSize:"xx-large"}} className="far fa-file-image"></i></label>
                    <input type="file" id = "profilePic" name="profilePic" style={{display:"none"}}></input>
                  </div>

                </div>
                <div className="teacher-meta">
                  {profileData.profileEnable === true ? <h5>{profileData.profileName}</h5> : <h5>{userData.userName}</h5>}
                  <p>{profileData.profileDesignation == '-' ? 'My Designation' : profileData.profileDesignation}</p>
                </div>
                <p>
                  Cup of char skive off bodge bobby blower tickety-boo quaint a blinding shot pear shaped squiffy harry, young delinquent grub so I said cuppa faff about bum bag bugger.
                </p>
                <div className="ab-social">
                  <h5>Follow Us</h5>
                  <a className="fac" href="#"><i className="social_facebook" /></a>
                  <a className="twi" href="#"><i className="social_twitter" /></a>
                  <a className="you" href="#"><i className="social_youtube" /></a>
                  <a className="lin" href="#"><i className="social_linkedin" /></a>
                </div>
              </div>
            </div>
        </>
    )
}

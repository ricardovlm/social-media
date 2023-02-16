import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import RightbarProfile from '../../components/rightbar/RightbarProfile'
import './profile.css'

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/person/8.jpeg" alt="" className="profileCoverImg" />
                            <img src="assets/person/8.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>SaFak Kotulono</h4>
                            <span className="profileinfoDesc">Heloo my friends!</span>
                        </div>


                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightbarProfile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
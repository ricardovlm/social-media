import React from 'react'
import './rightbar.css'

const RightbarProfile = () => {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbatInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbatInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbatInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jhon Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jhon Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jhon Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jhon Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jhon Carter</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightbarProfile
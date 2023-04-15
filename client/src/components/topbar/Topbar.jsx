import React, { useContext } from 'react'
import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Topbar = () => {

    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="logo">DEMO</div>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search />
                    <input className='searchInput' type="text" placeholder="Search" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarlink">Homepage</div>
                    <div className="topbarlink">Timeline</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img className='topbarImg' src={user.profilePicture ? PF +  'person/' + user.profilePicture : PF + 'person/noAvatar.png'} alt="" />

                </Link>
            </div>
        </div >
    )
}

export default Topbar
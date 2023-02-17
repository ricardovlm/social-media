import React from 'react'
import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <div className="logo">DEMO</div>
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
                <img className='topbarImg' src="/assets/person/1.jpeg" alt="" />
            </div>
        </div>
    )
}

export default Topbar
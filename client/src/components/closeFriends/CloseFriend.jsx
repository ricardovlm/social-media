import './closeFriend.css'

const CloseFriend = (user) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="sidebarFriend">
            <img src={PF + user.user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className='sideberFrienName'>{user.user.username}</span>
        </li>
    )
}

export default CloseFriend
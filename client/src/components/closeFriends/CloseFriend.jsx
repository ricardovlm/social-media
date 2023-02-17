import './closeFriend.css'

const CloseFriend = (user) => {
    console.log(user)
    return (
        <li className="sidebarFriend">
            <img src={user.user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className='sideberFrienName'>{user.user.username}</span>
        </li>
    )
}

export default CloseFriend
import { MoreVert } from '@mui/icons-material'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import './post.css'
import { AuthContext } from '../../context/AuthContext'



const Post = ({ post }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsliked] = useState(false)
    const [user, setUser] = useState([])
    const { user: currentUser } = useContext(AuthContext)


    useEffect(() => {
        setIsliked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    useEffect(() => {

        const fetchUser = async () => {
            const res = await axios.get(`/api/users?userId=${post.userId}`)
            setUser(res.data)
        }
        fetchUser()
    }, [post.userId])

    const likeHandle = () => {
        try {
            axios.put(`/api/posts/${post._id}/like`, { userId: currentUser._id })
        } catch (error) {

        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsliked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img src={user.profilePicture ? `${PF}person/${user.profilePicture }`  : `${PF}person/noAvatar.png`} alt="" className="postProfileImg" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">
                            {post.createdAt}

                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF + post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeHandle} />
                        <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeHandle} />
                        <span className="postLikeConter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
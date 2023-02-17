import { MoreVert } from '@mui/icons-material'
import { useState } from 'react'
import './post.css'
import { Users } from "../../dummyData"

const Post = ({ post }) => {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsliked] = useState(false)

    const likeHandle = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsliked(!isLiked)
    }

    const user = Users.filter((user) => user.id === post?.userId)

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{user[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" onClick={likeHandle} />
                        <img src="assets/heart.png" alt="" className="likeIcon" onClick={likeHandle} />
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
import { useState, useEffect, useContext } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
/* import { Posts } from '../../dummyData' */

const Feed = ({ username }) => {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)
    console.log(user);

    useEffect(() => {
        console.log('Rendere post first time');
        const fetchPost = async () => {
            const res = username
                ? await axios.get("/api/posts/profile/" + username)
                : await axios.get("/api/posts/timeline/" + user._id)
            const data = res.data.sort((a,b) => b.createAt - a.createAt)
            setPosts(data)
        }
        fetchPost()
    }, [username, user._id])
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {posts.map((post) => (
                    <Post
                        key={post._id}
                        post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed
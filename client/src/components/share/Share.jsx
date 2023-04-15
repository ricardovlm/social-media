
import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
const Share = () => {
    const PB = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useContext(AuthContext)
    const desc = useRef()
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault()
        // create a new post
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if(file){
            const data = new FormData()
            //const fileName= Date.now() + file.name
            data.append('file',file)
            data.append('name', file.name)
            newPost.img = file.name
            console.log(newPost);
            console.log("data", data);
            console.log('fileName',file.name);
            try {
                await axios.post('/api/upload', data)
            } catch (error) {
                console.log(error);
            }
        }

        try {
            console.log(newPost);
            await axios.post('/api/posts', newPost)
            window.location.reload();
        } catch (error) {

        }
    }
    console.log(user);

    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? PB + 'person/' + user.profilePicture : PB + 'person/noAvatar.png'} alt="" className="shareProfileImg" />
                    <input type="text"
                        placeholder={`What's in your mind ${user.username}?`}
                        className="shareInput"
                        ref={desc}
                    />
                </div>
                <hr className='shareHr'></hr>
                {file && (
                <div className="shareImgContainer">
                    <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                    <div className="shareCancelImg" onClick={() => setFile(null)}></div>
                </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PermMedia className='shareIcon' />
                            <span className="shareOptionText">Photo or video</span>
                            <input type="file"
                                style={{ display: 'none' }}
                                id="file"
                                accept=".png,.jpg,jpeg,.png"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
                        <div className="shareOption">
                            <Label className='shareIcon' />
                            <span className="shareOptionText">Tags</span>
                        </div>
                        <div className="shareOption">
                            <Room className='shareIcon' />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className='shareIcon' />
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share
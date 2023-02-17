
import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input type="text" placeholder="What's in your mind" className="shareInput" />
                </div>
                <hr className='shareHr'></hr>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className='shareIcon' />
                            <span className="shareOptionText">Photo or video</span>
                        </div>
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
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    )
}

export default Share
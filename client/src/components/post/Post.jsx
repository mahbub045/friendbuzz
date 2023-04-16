import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) {
    const [react, setReact] = useState(post.reacts.length);
    const [isReacted, setIsReacted] = useState(false);
    const [user, setUser] = useState({});
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId])

    const reactHandler = () => {
        setReact(isReacted ? react - 1 : react + 1);
        setIsReacted(!isReacted);
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className="postProfileImg" src={user.profilePicture || `${publicFolder}/assets/person/noAvatar.png`} alt="img" />
                        </Link>
                        <Link className="link" to={`profile/${user.username}`}>
                            <span className="postUsername">{user.username}</span>
                        </Link>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={`${publicFolder}/assets/${post.img}`} alt="" />
                </div>
                <div className="postButtom">
                    <div className="postButtomLeft">
                        <img className="reactIcon" src={`${publicFolder}/assets/love.png`} onClick={reactHandler} alt="react" />
                        <img className="reactIcon" src={`${publicFolder}/assets/like.png`} onClick={reactHandler} alt="react" />
                        <span className="reactCounter">{react} People Reacted</span>
                    </div>
                    <div className="postButtomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

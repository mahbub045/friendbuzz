import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import { useParams } from "react-router";

export default function Profile() {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        }
        fetchUser();
    }, [username]);

    return (
        <>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture || `${publicFolder}/assets/person/noCover.png`} alt="img" className="profileCoverImg" />
                            <img src={user.profilePicture || `${publicFolder}/assets/person/noAvatar.png`} alt="img" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={"username"} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}

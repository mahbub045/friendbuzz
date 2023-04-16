import "./online.css";

const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Online({ user }) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={`${publicFolder}/assets/${user.profilePicture}`} alt="img" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
        </li>
    )
}

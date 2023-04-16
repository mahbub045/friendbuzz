import "./closeFriend.css";

export default function closeFriend({ user }) {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="leftbarFriend">
            <img className="leftbarFriendImg" src={`${publicFolder}/assets/${user.profilePicture}`} alt="img" />
            <span className="leftbarFriendName">{user.username}</span>
        </li>
    )
}

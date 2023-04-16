import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Rightbar({ user }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="./assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>2 Other friends</b> have a birthday
                    </span>
                </div>
                {/* <img src="assets/ad.png" alt="" className="rightbarAd" /> */}
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    };
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarIntoKey">City: </span>
                        <span className="rightbarIntoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarIntoKey">From: </span>
                        <span className="rightbarIntoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarIntoKey">Relationship: </span>
                        <span className="rightbarIntoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married " : "None"}</span>
                    </div>
                    <h4 className="rightbarTitle">User Friends</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src={`${publicFolder}/assets/person/4.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Jahan mim</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${publicFolder}/assets/person/5.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Jahan mim</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${publicFolder}/assets/person/8.jpeg`} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Jahan mim</span>
                        </div>
                    </div>
                </div>
            </>
        )
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
};

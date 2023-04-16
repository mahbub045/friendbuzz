import "./leftbar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftBarList">
                    <li className="leftbarListItem">
                        <RssFeedIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <ChatIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Chats</span>
                    </li>
                    <li className="leftbarListItem">
                        <OndemandVideoIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Videos</span>
                    </li>
                    <li className="leftbarListItem">
                        <GroupIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Groups</span>
                    </li>
                    <li className="leftbarListItem">
                        <BookmarkIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarListItem">
                        <HelpOutlineIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Questions</span>
                    </li>
                    <li className="leftbarListItem">
                        <WorkIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Jobs</span>
                    </li>
                    <li className="leftbarListItem">
                        <EventIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Events</span>
                    </li>
                    <li className="leftbarListItem">
                        <SchoolIcon className="leftbarIcon" />
                        <span className="leftbarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr" />
                <ul className="leftbarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

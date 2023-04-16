import "./home.css";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContiner">
                <Leftbar />
                <Feed />
                <Rightbar />
            </div>
        </>

    )
};

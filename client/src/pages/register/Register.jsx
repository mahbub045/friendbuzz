import "./register.css";

export default function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <div className="registerLogo">FriendBuzz</div>
                    <span className="registerDesc">Connect With Your Friends on FriendBuzz.</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input type="text" className="registerInput" placeholder="Username" />
                        <input type="email" className="registerInput" placeholder="Email" />
                        <input type="password" className="registerInput" placeholder="Password" />
                        <input type="password" className="registerInput" placeholder="Confirm Password" />
                        <button className="registerButton">Sign Up</button>
                        <button className="loginButton">Login into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import "./login.css";

export default function login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginLogo">FriendBuzz</div>
                    <span className="loginDesc">Connect With Your Friends on FriendBuzz.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" className="loginInput" placeholder="Email" />
                        <input type="password" className="loginInput" placeholder="Password" />
                        <button className="loginButton">Login</button>
                        <span href="#" className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

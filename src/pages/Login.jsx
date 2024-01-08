import React from 'react'
import Add from "../img/addAvatar.png"

const Login = () => {
    return (
        <div className="formContainer">
          <div className="formWrapper">
            <span className="logo">WeChat Maulidi.com</span>
            <span className="title">Login</span>
            <form>
              <input required type="email" placeholder="email" />
              <input required type="password" placeholder="password" />
              <button>Login</button>
              {/* {loading && "Uploading and compressing the image please wait..."}
              {err && <span>Something went wrong</span>} */}
            </form>
            <p>
              Dont have an account?Register
            </p>
          </div>
        </div>
      );
}

export default Login

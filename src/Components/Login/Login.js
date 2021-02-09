import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import NavBarSection from "../Home/NavBarSection/NavBarSection";
import img from "../../Image/logo.png";
import bg from "../../Image/bg2.jpg";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

const style = {
  backgroundImage: `url("${bg}")`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100%",
  width: "100%",
  position: "fixed",
  overflow: "auto",
  height: "100%",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [newUser, setNewUser] = useState(false);

  const history = useHistory();
  let location = useLocation();

  const handleSubmit = () => {
    const email = loggedInUser.email;
    const password = loggedInUser.password;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...
        const newUser = { ...loggedInUser };
        newUser.email = user.user.email;
        setLoggedInUser(newUser);

        if (user.user.email === "admin@gmail.com") {
          history.push("/admin");
        } else {
          history.push("/profile");
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Reset password or create new account");
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const newUser = { ...loggedInUser };
    newUser[e.target.name] = e.target.value;
    setLoggedInUser(newUser);
  };

  const handleSignUp = () => {
    const email = loggedInUser.email;
    const password = loggedInUser.password;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        const newUser = { ...loggedInUser };
        newUser.email = user.user.email;
        setLoggedInUser(newUser);
        if (user.user.email === "admin@gmail.com") {
          history.push("/admin");
        } else {
          history.push("/profile");
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  /*
  const handleSignUp = () => {
    console.log("click");

    const email = loggedInUser.email;
    console.log(email);

    const actionCodeSettings = {
      // url: "http://localhost:3000/",
      url: "https://online-assessment-ltd.netlify.app/",
      handleCodeInApp: true,
    };

    firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        alert("Please check your email");
        setNewUser(false);
      })
      .catch((error) => {
        alert(error);
      });
  };   */

  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    var email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    firebase
      .auth()
      .signInWithEmailLink(email, window.location.href)
      .then((result) => {
        window.localStorage.removeItem("emailForSignIn");
        console.log(result.user.email);
        const email = result.user.email;
        const name = result.user.displayName;
        const newUser = {
          email: email,
          name: name,
        };
        setLoggedInUser(newUser);
        history.push("/profile");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        setLoggedInUser({ email: res.user.email, name: res.user.displayName });
        history.push("/profile");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleResetPassword = (passwordResetEmail) => {
    console.log("reset password");
    var auth = firebase.auth();
    var emailAddress = loggedInUser.email;
    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function (res) {
        // Email sent.
        alert("Email sent");
      })
      .catch(function (error) {
        // An error happened.
        alert(error.message);
      });
  };

  return (
    <div>
      <section style={style}>
        <div className="container  ">
          <div className="d-flex justify-content-center align-items-center m-2 p-3">
            <div className=" mt-5 p-3 " style={{ backgroundColor: "white" }}>
              <div className="row d-flex align-items-center">
                <div className="col-md-8 col-sm-6 text-md-left text-center ">
                  <div>
                    <h2 className="h2">Know Thyself</h2>
                  </div>

                  <p className="text-muted  text-center">
                    Sign in to start your session
                  </p>
                </div>
                <div className="col-md-4 text-md-left text-center mb-2">
                  <img src={img} style={{ width: "100px" }} alt="" />
                </div>
              </div>

              {newUser && (
                <div className="form-group">
                  <input
                    className="form-control mb-2"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    placeholder="First name"
                    required
                  />
                </div>
              )}

              {newUser && (
                <div className=" form-group">
                  <input
                    className="form-control mb-2"
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <input
                  className="form-control mb-2"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control mb-2"
                  type="password"
                  onChange={handleChange}
                  name="password"
                  placeholder="Enter password"
                />
              </div>

              <div className="row ">
                <div className="col-md-8">
                  {newUser ? (
                    <div className="d-flex justify-content-start">
                      <p className="forgot-password ">
                        <span
                          className="text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => setNewUser(!newUser)}
                        >
                          Already registered?
                        </span>
                      </p>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-start">
                      <p className="forgot-password ">
                        <span
                          className="text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => setNewUser(!newUser)}
                        >
                          Not yet registered?
                        </span>
                      </p>
                    </div>
                  )}

                  <div className="d-flex justify-content-start">
                    <p className="forgot-password ">
                      <span
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={handleResetPassword}
                      >
                        Reset Password
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                  {newUser ? (
                    <div>
                      <button
                        className=" text-light btn btn-danger"
                        onClick={handleSignUp}
                      >
                        Sign Up
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        className="text-light btn btn-danger"
                        onClick={handleSubmit}
                      >
                        Sign in
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div onClick={loginGoogle} className="google">
            Continue with Google
          </div>
          <div className="text-center d-flex row justify-content-center">
            <div
              style={{ color: "#810202" }}
              className="quote text-center mt-5 p-1 col-md-6 col-10"
            >
              <blockquote>
                <i className="quoteText">
                  Knowing Self is an endless pursuit that gets you closer to
                  excellence
                </i>
              </blockquote>
              <figcaption>&mdash; Himanshu </figcaption>
            </div>
          </div>
          <div>
            <p className="mt-5 text-center" style={{ color: "white" }}>
              © 2020 Centre of Strategic Mindset, All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

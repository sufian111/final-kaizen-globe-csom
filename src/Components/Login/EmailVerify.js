import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import ClientNavSection from "../Client/ClientNavSection/ClientNavSection";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

const EmailVerify = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const history = useHistory();
  let location = useLocation();

  const handleVarify = () => {
    console.log("click");
    const email = loggedInUser.email;
    console.log(email);

    const actionCodeSettings = {
      url: "http://localhost:3000/myProfile",
      handleCodeInApp: true,
    };

    firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        alert("Please check your email");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
      <ClientNavSection></ClientNavSection>
      <div onClick={handleVarify} className="google">
        please verify your email
      </div>
    </>
  );
};

export default EmailVerify;

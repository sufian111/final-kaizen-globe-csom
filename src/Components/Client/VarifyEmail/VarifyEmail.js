import React, { useContext } from "react";
import { UserContext } from "../../../App";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../Login/firebaseConfig";
import { useHistory } from "react-router-dom";
import ClientNavSection from "../ClientNavSection/ClientNavSection";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const VerifyEmail = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();

  const handleSignUp = () => {
    const email = loggedInUser.email;
    console.log(email);

    const actionCodeSettings = {
      // Replace this URL with the URL where the user will complete sign-in.
      url: "http://localhost:3000/myProfile",
      handleCodeInApp: true,
    };

    firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        // ...
        alert("Please check your email");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
    // [END auth_email_link_send]
  };

  // Confirm the link is a sign-in with email link.
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    var email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    // The client SDK will parse the code from the link for you.
    firebase
      .auth()
      .signInWithEmailLink(email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem("emailForSignIn");
        console.log(result);
        // Signed in
        const newUser = { ...loggedInUser };
        newUser.email = result.user.email;
        setLoggedInUser(newUser);
        history.push("/profile");
      })
      .catch((error) => {
        alert(error);
      });
  }

  const handleVarify = () => {
    console.log("click");
  };

  return (
    <>
      <ClientNavSection></ClientNavSection>
      <div onClick={handleVarify} className="google">
        Continue with Google
      </div>
    </>
  );
};

export default VerifyEmail;

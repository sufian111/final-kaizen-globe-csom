import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import HomePage from "./Components/Home/HomePage/HomePage";
import Login, { emailLinkComplete } from "./Components/Login/Login";
import UserProfile from "./Components/Client/UserProfile/UserProfile";
import AssessmentById from "./Components/Client/AssessmentById/AssessmentById";
import IntroductionPage from "./Components/Client/IntroductionPage/IntroductionPage";
import MyProfile from "./Components/Client/MyProfile/MyProfile";
import ReportSection from "./Components/Client/ReportSection/ReportSection";
import Completed from "./Components/Client/Completed/Completed";
import AdminPage from "./Components/Client/Admin/AdminPage/AdminPage";
import CreateNewAssessment from "./Components/Client/CreateNewAssessment/CreateNewAssessment";
import CreateAssessment from "./Components/Client/CreateNewAssessment/CreateAssessment";
import AdminProfile from "./Components/Client/Admin/AdminProfile/AdminProfile";
import ResultPage from "./Components/ResultPage/ResultPage";
import FinalResult from "./Components/FinalResult/FinalResult";
import ResultOrPdf from "./Components/ResultOrPdf/ResultOrPdf";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AdminSeeUserResult from "./Components/Client/Admin/AdminSeeUserResult/AdminSeeUserResult";
import VarifyEmail from "./Components/Client/VarifyEmail/VarifyEmail";
import EmailVerify from "./Components/Login/EmailVerify";
import UserDetails from "./Components/Client/Admin/UserDetails/UserDetails";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    photo: "",
    totalScore: 0,
    selectedAnswerArray: [],
  });

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/userDetails`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setLoggedInUser(data[0]);
        }
      });
  }, []);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/verifyEmail">
            <EmailVerify></EmailVerify>
          </PrivateRoute>

          <PrivateRoute path="/profile">
            <UserProfile></UserProfile>
          </PrivateRoute>

          <PrivateRoute path="/myProfile">
            <MyProfile></MyProfile>
          </PrivateRoute>

          <PrivateRoute path="/assessment/:id">
            <IntroductionPage></IntroductionPage>
          </PrivateRoute>

          <PrivateRoute path="/assessmentQuestion/:id">
            <AssessmentById />
          </PrivateRoute>

          <PrivateRoute path="/userReport/:id">
            {/* <ReportSection></ReportSection> */}
            <FinalResult></FinalResult>
          </PrivateRoute>

          <PrivateRoute path="/completeAssessment">
            <Completed></Completed>
          </PrivateRoute>

          <PrivateRoute path="/resultOrPdf/:id">
            <ResultOrPdf></ResultOrPdf>
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <AdminPage></AdminPage>
          </PrivateRoute>

          <Route path="/userDetails/:id">
            <UserDetails></UserDetails>
          </Route>

          <PrivateRoute path="/adminProfile">
            <AdminProfile></AdminProfile>
          </PrivateRoute>

          <PrivateRoute path="/createNew">
            <CreateAssessment></CreateAssessment>
          </PrivateRoute>

          <PrivateRoute path="/result">
            <FinalResult></FinalResult>
          </PrivateRoute>

          <PrivateRoute path="/report/:id">
            <AdminSeeUserResult></AdminSeeUserResult>
          </PrivateRoute>

          <Route path="*">
            <p>page not found</p>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

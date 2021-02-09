import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../../App";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import UserData from "../UserData/UserData";

const AdminPage = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [allAnswer, setAllAnswer] = useState([]);
  const [uniqueEmail, setUniqueEmail] = useState(0);

  useEffect(() => {
    fetch("https://damp-woodland-24997.herokuapp.com/allAnswer")
      .then((res) => res.json())
      .then((data) => {
        setAllAnswer(data);
      });
  }, []);

  const allEmail = [];
  const allKyes = allAnswer.map((question) => {
    allEmail.push(question.email);
  });

  const useFilter = (arr) => {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  };

  const unique = useFilter(allEmail);

  const allUniqueEmail = [];

  for (let i = 0; i < unique.length; i++) {
    const element = unique[i];
    const uniqueEmail = allAnswer.find((answer) => {
      return answer.email === element;
    });

    allUniqueEmail.push(uniqueEmail);
  }

  return (
    <>
      <AdminNavBar></AdminNavBar>
      <div className="container">
        <div className="row mb-2 ml-4">
          <div className="col-md-6">
            <h3 style={{ color: "#800000" }} className="my-3">
              All User information
            </h3>
          </div>
          <div className="searchBar mt-3 d-flex">
            <input
              class="form-control mr-sm-2 mt-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              // onChange={handleSearchWord}
            ></input>
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              // onClick={search}
            >
              Search
            </button>
          </div>
        </div>
        {allUniqueEmail.map((uniqueEmail) => (
          <UserData uniqueEmail={uniqueEmail}></UserData>
        ))}
      </div>
    </>
  );
};

export default AdminPage;

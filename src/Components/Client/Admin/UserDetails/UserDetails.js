import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminNavBar from "../AdminNavBar/AdminNavBar";

const UserDetails = () => {
  const { id } = useParams();

  const [userDetails, setUserDetails] = useState({});
  console.log(userDetails);
  const {
    name,
    email,
    firstName,
    lastName,
    gender,
    age,
    Industry,
    companyName,
    position,
    leaders,
    ClientFacing,
    experiences,
    about,
  } = userDetails;

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/userDetails`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          // setLoggedInUser(data[0]);
          setUserDetails(data[0]);
        }
      });
  }, []);

  return (
    <>
      <>
        <AdminNavBar></AdminNavBar>
        <div>
          <div className="container profile-page">
            <div className="col-md-10 row mx-auto mt-4 py-4 py-md-5 px-md-5 info-card">
              <div className="col-md-12 col-lg-9 pl-md-5 pb-5 pt-3 box">
                <hr />
                <div className="mb-4">
                  <h3>User Details </h3>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="Email">Email</label>
                    </div>
                    <div className="col-md-4">
                      <input
                        name="email"
                        placeholder="Your email"
                        defaultValue={email}
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="User Name">User Name</label>
                    </div>
                    <div className="col-md-4">
                      <input
                        name="name"
                        placeholder="user name"
                        defaultValue={name}
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <hr />
                <div className="mb-4">
                  <h3>Profile Details</h3>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="First Name">First Name</label>
                    </div>
                    <div className="col-md-4">
                      <input
                        name="firstName"
                        placeholder="first name"
                        type="text"
                        defaultValue={firstName}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="Last Name">Last Name</label>
                    </div>
                    <div className="col-md-4">
                      <input
                        name="lastName"
                        placeholder="last name"
                        defaultValue={lastName}
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="Gender">Gender</label>
                    </div>
                    <div className="col-md-8">
                      <input name="gender" defaultValue={gender} type="text" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4 pt-2">
                      <label htmlFor="Age">Age</label>
                    </div>
                    <div className="col-md-4">
                      <input
                        name="age"
                        placeholder="Age in years"
                        type="text"
                        defaultValue={age}
                      />
                    </div>
                  </div>
                </div>

                {/*--------------------------------------------------------------------Industry*/}

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="Industry">Industry</label>
                    </div>
                    <div className="col-md-4">
                      <input
                        name="Industry"
                        type="text"
                        defaultValue={Industry}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="Company Name">Company Name</label>
                    </div>
                    <div className="col-md-4">
                      <input
                        name="companyName"
                        placeholder="Company Name"
                        defaultValue={companyName}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                {/* --------------------------------------------------------------position */}
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="Position">Position</label>
                    </div>
                    <div className="col-md-4">
                      <input
                        name="position"
                        type="text"
                        defaultValue={position}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="Level of leaders">
                        Level of Leadership
                      </label>
                    </div>
                    <div className="col-md-4">
                      <input
                        name="leaders"
                        type="text"
                        defaultValue={leaders}
                      />
                    </div>
                  </div>
                </div>

                {/*--------------------------------------------------------------------Client facing*/}
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="Client facing">Functions</label>
                    </div>
                    <div className="col-md-4">
                      <input
                        name="ClientFacing"
                        type="text"
                        defaultValue={ClientFacing}
                      />
                    </div>
                  </div>
                </div>

                {/*----------------------------------------------------------------------experiences*/}
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="Years of experience">
                        Years of experience
                      </label>
                    </div>
                    <div className="col-md-4">
                      <input
                        name="experiences"
                        placeholder="Years of experience"
                        defaultValue={experiences}
                        type="number"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="About">About</label>
                    </div>
                    <div className="col-md-4">
                      <textarea
                        placeholder="one line description about you"
                        name="about"
                        rows="3"
                        defaultValue={about}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default UserDetails;

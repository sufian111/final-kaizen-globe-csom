import React, { useContext, useEffect, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../../App";
import AdminNavBar from "../AdminNavBar/AdminNavBar";

const AdminProfile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();

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
          history.push("/admin");
        }
      });
  }, []);

  const [userDetails, setUserDetails] = useState({
    ...loggedInUser,
    gender: "Male",
    age: "",
    companyName: "",
    position: "Chairman/Board Member/Independent Director",
    about: "",
    phone: "",
    experiences: "",
    Industry: "Agriculture and Allied Industries",
    leaders: "top level",
    ClientFacing: "General Management",
  });

  const handleInput = (e) => {
    const newUserDetails = { ...userDetails };
    newUserDetails[e.target.name] = e.target.value;
    setUserDetails(newUserDetails);
  };

  let { from } = location.state || { from: { pathname: "/" } };

  const handleSubmit = () => {
    if (
      userDetails.companyName &&
      userDetails.name &&
      userDetails.firstName &&
      userDetails.position &&
      userDetails.Industry &&
      userDetails.gender &&
      userDetails.leaders
    ) {
      fetch("https://damp-woodland-24997.herokuapp.com/addUser", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userDetails),
      })
        .then((res) => res.json())
        .then((result) => {
          alert("User added successfully");
          setLoggedInUser(userDetails);
          history.push("/admin");
        });
    } else {
      alert("Please submit all data.");
    }
  };

  return (
    <>
      <AdminNavBar></AdminNavBar>
      <div>
        <div className="container profile-page">
          <div className="col-md-10 row mx-auto mt-4 py-4 py-md-5 px-md-5 info-card">
            <div className="col-md-12 col-lg-9 pl-md-5 pb-5 pt-3 box">
              <hr />
              <div className="mb-4">
                <h3>Account Setting</h3>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="Email">Email</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      name="email"
                      onChange={handleInput}
                      placeholder="Your email"
                      defaultValue={loggedInUser.email}
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
                      onChange={handleInput}
                      placeholder="user name"
                      defaultValue={loggedInUser.name}
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <hr />
              <div className="mb-4">
                <h3>Profile Setting</h3>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="First Name">First Name</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      name="firstName"
                      onChange={handleInput}
                      placeholder="first name"
                      type="text"
                      defaultValue={loggedInUser.firstName}
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
                      onChange={handleInput}
                      placeholder="last name"
                      defaultValue={loggedInUser.lastName}
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
                    <select
                      onChange={handleInput}
                      name="gender"
                      class="width-40"
                      defaultValue={loggedInUser.gender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="TransMale">TransMale</option>
                      <option value="TransFemale">TransFemale</option>
                      <option value="Something Else">Something Else</option>
                      <option value="Decline to Answer">
                        Decline to Answer
                      </option>
                    </select>
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
                      onChange={handleInput}
                      name="age"
                      placeholder="Age in years"
                      type="text"
                      defaultValue={loggedInUser.age}
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
                    <select
                      onChange={handleInput}
                      name="Industry"
                      class="width-40"
                      defaultValue={loggedInUser.Industry}
                    >
                      <option value="Agriculture and Allied Industries">
                        Agriculture and Allied Industries
                      </option>
                      <option value="Automobiles and Auto Components">
                        Automobiles and Auto Components
                      </option>

                      <option value="Accounting Services">
                        Accounting Services
                      </option>
                      <option value="Aviation">Aviation</option>
                      <option value="Banking">Banking</option>
                      <option value="Big Data and Artificial Intelligence">
                        Big Data and Artificial Intelligence
                      </option>
                      <option value="Cement">Cement</option>
                      <option value="Consumer Durables">
                        Consumer Durables
                      </option>
                      <option value="Consulting">Consulting</option>
                      <option value="Defense">Defense</option>
                      <option value="ECommerce">ECommerce</option>
                      <option value="Education and Training">
                        Education and Training
                      </option>
                      <option value="Engineering and Capital Goods">
                        Engineering and Capital Goods
                      </option>
                      <option value="Financial Services">
                        Financial Services
                      </option>
                      <option value="FMCG">FMCG</option>
                      <option value="Gems and Jewellery">
                        Gems and Jewellery
                      </option>
                      <option value="Healthcare and Diagnostics">
                        Healthcare and Diagnostics
                      </option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="IT and ITeS">IT and ITeS</option>
                      <option value="Logistics and Supply Chain">
                        Logistics and Supply Chain
                      </option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Marine Industries">
                        Marine Industries
                      </option>
                      <option value="Media and Entertainment">
                        Media and Entertainment{" "}
                      </option>
                      <option value="Metals and Mining">
                        Metals and Mining
                      </option>
                      <option value="Oil and Gas">Oil and Gas</option>
                      <option value="Pharmaceuticals">Pharmaceuticals</option>
                      <option value="Ports">Ports</option>
                      <option value="Power">Power</option>
                      <option value="Railways">Railways</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Renewable Energy">Renewable Energy</option>
                      <option value="Retail">Retail</option>
                      <option value="Roads and Highways">
                        Roads and Highways
                      </option>
                      <option value="Science and Technology">
                        Science and Technology
                      </option>
                      <option value="Services">Services</option>
                      <option value="Shipping and Cargo">
                        Shipping and Cargo
                      </option>
                      <option value="Space Exploration">
                        Space Exploration
                      </option>
                      <option value="Steel">Steel</option>
                      <option value="Telecommunications">
                        Telecommunications
                      </option>
                      <option value="Textiles">Textiles</option>
                      <option value="Tourism and Hospitality">
                        Tourism and Hospitality
                      </option>
                    </select>
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
                      onChange={handleInput}
                      name="companyName"
                      placeholder="Company Name"
                      defaultValue={loggedInUser.companyName}
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
                    <select
                      onChange={handleInput}
                      name="position"
                      class="width-40"
                      defaultValue={loggedInUser.position}
                    >
                      <option value="Chairman/Board Member/Independent Director">
                        Chairman/Board Member/Independent Director
                      </option>
                      <option value="CEO/MD">CEO/MD</option>
                      <option value="Founder/Promoter/Entrepreneur">
                        Founder/Promoter/Entrepreneur
                      </option>
                      <option value="President/CFO/CIO/CMO/CHRO">
                        President/CFO/CIO/CMO/CHRO
                      </option>
                      <option value="Executive Vice President/Partner">
                        Executive Vice President/Partner
                      </option>
                      <option value="SVP">SVP</option>
                      <option value="VP/Director">VP/Director</option>
                      <option value="General Manager">General Manager</option>
                      <option value="Assocciate VP/Principal Consultant">
                        Assocciate VP/Principal Consultant
                      </option>
                      <option value="Assistant VP/Associate Director">
                        Assistant VP/Associate Director
                      </option>
                      <option value="Senior Manager">Senior Manager</option>
                      <option value="Manager/Consultant">
                        Manager/Consultant
                      </option>
                      <option value="Assistant Manager">
                        Assistant Manager
                      </option>
                      <option value="Senior Associates">
                        Senior Associates
                      </option>
                      <option value="Associates">Associates</option>
                    </select>
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
                    <select
                      onChange={handleInput}
                      name="leaders"
                      class="width-40"
                      defaultValue={loggedInUser.leaders}
                    >
                      <option value="top level">Top level</option>
                      <option value="senior level">Senior Level</option>
                      <option value="mid level">Mid level</option>
                      <option value="emerging">Emerging</option>
                    </select>
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
                    <select
                      onChange={handleInput}
                      name="ClientFacing"
                      class="width-40"
                      defaultValue={loggedInUser.ClientFacing}
                    >
                      <option value="General Management">
                        General Management
                      </option>
                      <option value="Finance/Accounting/Tax">
                        Finance/Accounting/Tax
                      </option>

                      <option value="Human Resource">Human Resource</option>
                      <option value="Sales/Pre-Sales">Sales/Pre-Sales</option>

                      <option value="Marketing">Marketing</option>
                      <option value="Operations/Delivery">
                        Operations/Delivery
                      </option>

                      <option value="Customer Experience">
                        Customer Experience
                      </option>
                      <option value="Purchase and Procurement">
                        Purchase and Procurement
                      </option>

                      <option value="R and D/Innovation">
                        R and D/Innovation
                      </option>
                      <option value="Industrial Relationships">
                        Industrial Relationships
                      </option>

                      <option value="Media and Communications">
                        Media and Communications
                      </option>
                      <option value="Investor Relationships">
                        Investor Relationships
                      </option>

                      <option value="Sustainability">Sustainability</option>
                      <option value="Public Relationships">
                        Public Relationships
                      </option>
                    </select>
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
                      onChange={handleInput}
                      name="experiences"
                      placeholder="Years of experience"
                      defaultValue={loggedInUser.experiences}
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
                      onChange={handleInput}
                      placeholder="one line description about you"
                      name="about"
                      rows="3"
                      defaultValue={loggedInUser.about}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 mb-4">
            {loggedInUser.companyName &&
            loggedInUser.name &&
            loggedInUser.position &&
            loggedInUser.Industry &&
            loggedInUser.gender &&
            loggedInUser.leaders ? (
              <div>complete</div>
            ) : (
              <button onClick={handleSubmit} className="btn btn-success ">
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;

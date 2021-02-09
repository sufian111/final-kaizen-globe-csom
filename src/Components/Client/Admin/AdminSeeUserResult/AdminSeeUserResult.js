import React from "react";
import { useParams } from "react-router-dom";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import SingleUserResult from "./SingleUserResult";
import SingleUserSelectedAnswer from "./SingleUserSelectedAnswer";

const AdminSeeUserResult = () => {
  const { id } = useParams();

  return (
    <>
      <AdminNavBar></AdminNavBar>
      <div className="container">
        <SingleUserResult id={id}></SingleUserResult>
        <SingleUserSelectedAnswer id={id}></SingleUserSelectedAnswer>
      </div>
    </>
  );
};

export default AdminSeeUserResult;

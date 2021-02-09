import React from "react";
import { Link, useParams } from "react-router-dom";
import ClientNavSection from "../Client/ClientNavSection/ClientNavSection";
import pdf from "../../../src/Image/one.pdf";

const ResultOrPdf = () => {
  const { id } = useParams();
  return (
    <div>
      <ClientNavSection></ClientNavSection>
      <div className="container text-center mt-5">
        <Link to={`/userReport/${id}`}>
          <button className="letsGoBtn">Show Result</button>
        </Link>
      </div>
    </div>
  );
};

export default ResultOrPdf;

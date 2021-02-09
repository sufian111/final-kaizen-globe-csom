import React from "react";
import img from "../../../Image/Picture1.png";
import Construct from "../../../Image/p1.png";
const Introduction = () => {
  return (
    <section>
      {/* <div className="html2pdf__page-break"></div> */}
      <div className="container" style={{ textAlign: "left" }}>
        <h3 className="">Introduction - What is Empathy?</h3>
        <p className="text-justify">
          The definition of empathy varies. Merriam-Webster dictionary defines
          Empathy as ‘the action of understanding, being aware of; being
          sensitive to, and vicariously experiencing others’ feelings, thoughts
          and emotions, whether emanating from their past or present
          experiences’. To make it more concise, empathy implies an accurate
          understanding of someone else’s perspectives and experiences. To be
          empathic would not only mean seeing others’ perspectives (both
          intellectual and emotional) but also gaining an insight into the
          legitimacy of that perspective.
        </p>
        <p style={{ fontStyle: "italic" }}>
          “It is important to note that, in most cases, an intellectual
          understanding is insufficient – to be empathic one must understand the
          emotional experience of that individual”. 
        </p>
        <p style={{ fontWeight: "bold" }}>
          Empathy is not a soft nurturing value, but a hard commercial tool that
          every business needs as part of their DNA to stay relevant as well as
          significant.
        </p>
        <p>
          In Harvard Business Review (Parmar, 2015b), it is also stated that
          there is an obvious correlation between empathy and commercial
          success. Besides, businesses are far more profitable and productive
          when they act ethically, and treat their staff with respect, and
          communicate better with the customers. The fact that supports this
          statement is that the top 10 companies in the Global Empathy Index
          2015, increased in value more than twice as much as the bottom 10, and
          generated 50% more earnings. The average earnings of the top 10
          companies went up by 6% in 2015, while the average earnings of the
          bottom 10 companies, further dropped 9% (Dishman, 2015).
        </p>
        <p>
          The past decade has seen a growing movement towards a view that
          postulates empathy as a multidimensional construct. Therefore, it is
          worthwhile for us to understand the construct and apply it in our
          lives.
        </p>
        <h3>Empathy Construct</h3>
        <div className="row d-flex align-items-center">
          <div className="col-md-8" style={{ textAlign: "left" }}>
            We talk about empathy, most commonly as a single attribute. But a
            closer and deeper look at empathy reveals three guiding components
            and their inter-relationship, that influences human behaviours in a
            variety of situations. Each component is important in its own way
            and their interoperability manifests in a variety of ways. The three
            components are as below :-
            <div>
              <p>
                {" "}
                <span style={{ fontWeight: "bold" }}>
                  &bull; Cognitive Empathy -
                </span>{" "}
                Cognitive Empathy - the ability to understand another person’s
                perspective
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>&bull; Emotional Empathy -</span>{" "}
                the ability to feel what someone else feels
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>&bull; Affective Empathy -</span>{" "}
                the ability to sense what another person needs from you
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={Construct} width="100%" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

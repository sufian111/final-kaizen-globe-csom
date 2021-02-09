import React from "react";
import p2 from "../../../Image/p2.png";

const BackGroundResearch = () => {
  return (
    <section>
      <div className="html2pdf__page-break"></div>
      <div className="container" style={{ textAlign: "left" }}>
        <h3>Background Research</h3>
        <p className="">
          Our tryst with empathy is two decades old. In our research on empathy,
          we have closely observed more than 5000 people and interviewed 500
          plus leaders across industries and levels, to arrive at 10 critical
          insights as under:-
        </p>
        <div style={{fontSize: '22px'}}>
          <p style={{display: 'flex'}}>
            <div style={{minWidth : '30px'}}>1.</div>Empathy is learnable through reflections and structured discipline.
          </p>
          <p style={{display: 'flex'}}><div style={{minWidth : '30px'}}>2.</div>There are stages that can be acquired, honed and mastered.</p>
          <p style={{display: 'flex'}}>
            <div style={{minWidth : '30px'}}>3.</div>Each preceding stage is a precursor to understanding and learning
            the next stage.
          </p>
          <p style={{display: 'flex'}}>
            <div style={{minWidth : '30px'}}>4.</div>In nutshell, it is a simple process of activating
            ‘Stop-Start-Continue’ discipline when it comes to understanding and
            manifesting empathetic behaviours.
          </p>
          <p style={{display: 'flex'}}>
            <div style={{minWidth : '30px'}}>5.</div>Empathy is rooted in observation as well as non-judgement, almost
            simultaneously.
          </p>
          <p style={{display: 'flex'}}>
            <div style={{minWidth : '30px'}}>6.</div>Empathy is about striking a balance between the inner world as well
            as the external or someone else’s world, through a series of
            interactions between stimuli and responses.
          </p>
          <p style={{display: 'flex'}}>
            <div style={{minWidth : '30px'}}>7.</div>Empathy is a muscle that develops with deliberate and disciplined
            exercises.
          </p>
          <p style={{display: 'flex'}}>
            <div style={{minWidth : '30px'}}>8.</div>Empathy is not mere sympathy; it is rooted in concrete actions
            triggered by a 'moving experience'.
          </p>
          <p style={{display: 'flex'}}>
            <div style={{minWidth : '30px'}}>9.</div>Empathy is critical to innovation, relevance and significance.
          </p>
          <p style={{display: 'flex'}}>
            <div style={{minWidth : '30px'}}>10.</div>Empathy is severely under assault due to modern day distractions,
            temptations and an excessive focus on ‘I - me - my’ syndrome.
          </p>
        </div>
        <div className="html2pdf__page-break"></div>
        <div>
          <h3 className="text-info">
            Key Questions that Influenced COSM’s Research on Empathy{" "}
          </h3>
          <div className="text-info" style={{fontSize: '22px'}}>
            <p style={{display: 'flex'}}><div style={{minWidth : '30px'}}>1.</div>What is true empathy?</p>
            <p style={{display: 'flex'}}><div style={{minWidth : '30px'}}>2.</div>How does it differentiate itself from sympathy?</p>
            <p style={{display: 'flex'}}>
              <div style={{minWidth : '30px'}}>3.</div>What behaviours exhibit themselves on the spectrum of Apathy,
              Sympathy and Empathy?
            </p>
            <p style={{display: 'flex'}}>
              <div style={{minWidth : '30px'}}>4.</div>Why empathy can lead us to an ‘Epiphany’ (the moment of truth)?
            </p>
            <p style={{display: 'flex'}}>
              <div style={{minWidth : '30px'}}>5.</div>Why empathy is such a misconstrued or misunderstood phenomena?
            </p>
            <p style={{display: 'flex'}}><div style={{minWidth : '30px'}}>6.</div>How come empathy is such a hard thing to develop?</p>
            <p style={{display: 'flex'}}>
              <div style={{minWidth : '30px'}}>7.</div>Why empathy is often considered to be a misnomer when it comes to
              driving hard and aspirational results?
            </p>
            <p style={{display: 'flex'}}><div style={{minWidth : '30px'}}>8.</div>Why do we need to practice or lead with empathy?</p>
            <p style={{display: 'flex'}}>
              <div style={{minWidth : '30px'}}>9.</div>How to develop empathy in a structured and conscious manner?
            </p>
            <p style={{display: 'flex'}}><div style={{minWidth : '30px'}}>10.</div>How to cultivate an Empathetic Mindset?</p>
          </div>
        </div>
        <div>
          <div className="html2pdf__page-break"></div>
          <h3>Empathy – An Instrument for Epiphany </h3>
          <div className="row d-flex align-items-center">
            <div className="col-md-9">
              We live in an interdependent world. Our thought process and
              actions impact others; and others’ conduct impact us favorably or
              adversely. If there is one thing that makes this interdependence
              work at its peak effectiveness, it is empathy. Empathy is core to{" "}
              <span style={{ fontWeight: "bold" }}>‘Problem Discovery’</span>{" "}
              and is a critical imperative to be considered even before
              contemplating any resolution. It takes knowledge, understanding,
              personal experiences, a compassionate mindset and most importantly
              a rigorous discipline to be empathetic.
            </div>
            <div className="col-md-3">
              <img src={p2} width="100%" height="90%" alt="" />
            </div>
          </div>
          <p>
            How do we balance our personal needs with others’ requirements forms
            the basis of{" "}
            <span style={{ fontWeight: "bold" }}>EMPATHY EQUATION</span> between
            two stakeholders or among multiple ones. And it is never a perfect
            or a stationary balance. It is an oscillating or shifting balance.
            As long as we are able to appreciate this reality, and are willing
            to make adjustments, we can succeed in keeping this balance intact,
            and the empathy equation in a desirable equilibrium.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackGroundResearch;

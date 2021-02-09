import React from "react";
import "./Dimensions.css";

import rela from "../../../Image/rela.png";
import reso from "../../../Image/reso.png";
import refram from "../../../Image/refram.png";
import reor from "../../../Image/reor.png";
import reimg from "../../../Image/reimg.png";

const information = [
  {
    img: rela,
    title: "RELATABILITY",
    description:
      "  Ability to relate to the emotions that people around us carry, and their state of mind, which drives their actions and behaviours. People are a product of their experiences that influence their beliefs, logics and frame of references. If we can pause to appreciate where others are coming from, we can adjust our approach, responses and hopefully influence our outcomes.",
  },
  {
    img: reso,
    title: "RESONANCE",
    description:
      "Ability to feel something deeply and resonate with others' emotions and feelings, without judgement. The basic approach here is 'Appreciate First - Critique Later'. The core discipline to adhere here is, to gain entry into others' world with a sense of wonderment and curiosity; and not with prejudices. It is our capacity to resonate with another person in a manner, which is positive, affirming and empowering so that the rapport is established.",
  },
  {
    img: refram,
    title: "REFRAMING",
    description:
      "Ability to come out and reframe our understanding that existed prior to experiencing others' world. The propensity here is to challenge and realign our assumptions as well as belief systems, in the light of contradicting information or thought-patterns manifested by others. This allows us to understand others' point of view, find opportunities to eliminate our assumptions and make new frames of references. Assumptions are the least form of knowledge, so reframing our understanding is critical.",
  },
  {
    img: reor,
    title: "REORIENTATION",
    description:
      "Ability to adapt and calibrate our stance, position or approach with new or better understanding of the stakeholders and situations, to build rapport, create alignment and strike breakthroughs. This calls for agility, flexibility and capacity to reconsider or re-examine your actions as well as responses, based on others' thought process. It is our calibre to frame new belief systems or alter existing thoughts to navigate the relationship challenges and prime ourself to respond to other person’s needs",
  },
  {
    img: reimg,
    title: "REIMAGINATION",
    description:
      "In the end, it is all about reimagining possibilities, visualizing prospects and neutralizing constraints, through better understanding, relatability, resonance, reframing and reorienting our approach. This is the level of empathy that is required for mutual win-win, co-creation, innovation and change. It is the prowess to skilfully design behaviours that are in resonance with own value system, yet respectful of others' belief systems, thus leading to affable responses.",
  },
];

const Dimensions = () => {
  return (
    <section className="">
      <div className="container">
        <h3>Empathy Index – Fundamental Dimensions</h3>
        <p>
          Empathy Index is based on five fundamental dimensions. Each of these
          dimensions displays a distinctive and predictable pattern of
          relationships with definitive measures that provide a considerable
          evidence for a multidimensional approach to empathy.
        </p>
        {information.map((info, i) => (
          <div>
            <div className="row">
              <div className="col-md-2 text-center ">
                <img src={info.img} className="w-40 w-md-100" alt="" />
              </div>
              <div className="col-md-10">
                <button className="btn-dim">{info.title}</button>
                <p>{info.description}</p>
              </div>
            </div>
            {/* {i === 1 ? <div className="html2pdf__page-break"></div> : ""} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dimensions;

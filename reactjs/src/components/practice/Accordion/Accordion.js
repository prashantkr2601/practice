import { useState } from "react";
import { faqData } from "./AccordionData";
import "./Accordion.css";

const Accordion = () => {
  const [isClicked, setIsClicked] = useState(-1);

  const toggleFaq = (index) => {
    if (isClicked === index) {
      return setIsClicked(-1);
    } else {
      setIsClicked(index);
    }
  };

  return (
    <>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div key={index} className="faq" onClick={() => toggleFaq(index)}>
            <div className="title">
              <h1>{item.question}</h1>
              {isClicked === index ? <i> - </i> : <i> + </i>}
            </div>

            <div className={`content ${isClicked === index && "show"}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;

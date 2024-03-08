/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = (props) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div className="py-2">
        <button
          className="flex justify-between w-full"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          <span>{props.title}</span>
          <span>
            <svg
              className="fill-white shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
            </svg>
          </span>
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white opacity-65 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{props.answer}</div>
      </div>
    </>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  answer: PropTypes.string,
};

export default Accordion;

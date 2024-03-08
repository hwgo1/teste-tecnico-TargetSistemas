import Accordion from "./Accordion";
import questionData from "../index.js";

const Questions = () => {
  return (
    <div className="mt-20">
      {questionData.map((data, index) => (
        <div
          key={index}
          className={`p-4 mb-4 border-2 border-slate-400 bg-zinc-700 rounded-lg text-white${
            index === questionData.length - 1 ? "" : " mb-4"
          }`}
        >
          <Accordion title={data.title} answer={data.answer} />
        </div>
      ))}
    </div>
  );
};

export default Questions;

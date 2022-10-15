import {
  ArrowDownward,
  ArrowDropDown,
  ArrowRight,
  ArrowUpward,
  CheckCircle,
  Circle,
  PlayCircle,
} from "@mui/icons-material";
import React, { useState, useRef } from "react";

const Accordion = ({ title, content,item }) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px");
  };
  return (
    <div  className="border border-gray-200">
      <div
        className={
          "bg-white-300 p-2 flex items-center justify-between text-black"
        }
      >
        <div onClick={HandleOpening} className="flex cursor-pointer items-center justify-center">
          {!isOpened ? (
            <ArrowRight fontSize="large" />
          ) : (
            <ArrowDropDown fontSize="large" />
          )}
          <h4 className="font-semibold text-base text-black font-bold">
            {title}
          </h4>
        </div>
        <div className="flex items-center justify-center">
        <p className="p-1 text-sm text-black">{item.lecture} lectures. {item.duration}</p>
        <CheckCircle color="white" />
        </div>
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-gray-100 overflow-hidden transition-all duration-200"
      >
        <ul className="flex flex-col justify-center ">
          {content?.map((item, index) => (
            <li key={index} className="flex flex-row justify-between p-1 cursor-pointer hover:text-blue-600 text-sm text-black">
           <div className="flex">
           <PlayCircle style={{marginRight:5}} fontSize="small" /> {item.title}
           </div>
           <p>{item.duration}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;

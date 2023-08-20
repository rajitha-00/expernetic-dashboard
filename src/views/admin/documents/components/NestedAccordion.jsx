import React, { useState } from 'react';
import {

    MdArrowDropDown,
    MdArrowRight
} from "react-icons/md";

import { FcFolder, FcOpenedFolder} from "react-icons/fc";
const NestedAccordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="  rounded-[10px] p-1 mb-2">
        <div
          className="flex  items-center cursor-pointer  active:bg-green-200 rounded-[10px]"
          onClick={toggleAccordion}
        >
          <span className="text-gray-500">
            {isOpen ? (
                <>
                    <div className="flex">

                        <MdArrowDropDown className="h-6 w-6 " />
                        <FcOpenedFolder className="h-6 w-6 " />
                    </div>
                </>
            ) : (
                <>
                <div className="flex">

                <MdArrowRight className="h-6 w-6" />                    
                <FcFolder className="h-6 w-6 " />
                </div>
            </>
            )}
          </span>
          <h2 className="pl-3 text-md font-semibold ">{title}</h2>
        </div>
        {isOpen && (
          <div className="ml-4">
            {children}
          </div>
        )}
      </div>
    );
  };

export default NestedAccordion

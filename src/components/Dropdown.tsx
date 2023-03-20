import React, {useRef, useState} from "react";
import {useOutsideClick} from "@/hooks/useOutsideClick";

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
                                             options,
                                             selectedOption,
                                             onSelectOption,
                                             label,
                                           }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option: string) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  const optionsRef = useRef(null);
  useOutsideClick(optionsRef, () => setIsOpen(false))

  return (
    <div className="relative inline-block text-left">
      <div>
        <div className="text-black pb-4">{label}</div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || "Select one"}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div ref={optionsRef}
             className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                role="menuitem"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

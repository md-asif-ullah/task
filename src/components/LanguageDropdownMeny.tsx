"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";

interface Language {
  title: string;
  language: string;
}

const languages: Language[] = [
  { title: "English", language: "en" },
  { title: "Thai", language: "th" },
  { title: "Bahasa Indonesia", language: "id" },
  { title: "Traditional Chinese", language: "zh-TW" },
];

const LanguageDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-48 px-4 py-2 text-white bg-transparent text-sm"
        >
          <span className="flex items-center">
            <FaGlobe className="mr-2" />
            ENGLISH
          </span>
          <span className="ml-2">
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </button>
      </div>
      <div
        className={`overflow-hidden mt-2 w-48 bg-transparent transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isOpen && (
          <ul className="py-2 text-white">
            {languages.map((lang) => (
              <li
                key={lang.language}
                className="px-4 py-2 cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {lang.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageDropdownMenu;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import LanguageDropdownMenu from "./LanguageDropdownMeny";

const SmallDeviceHeader = () => {
  const [open, setOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  interface SubSegment {
    name: string;
    url: string;
  }

  interface Segment {
    name: string;
    subSegments?: SubSegment[];
    url?: string;
  }

  const segments: Segment[] = [
    {
      name: "Solutions",
      subSegments: [
        { name: "AnyCaas", url: "/anycass" },
        { name: "AnyCaas", url: "/anycass" },
        { name: "AnyCaas", url: "/anycass" },
      ],
    },
    { name: "Services", url: "/services" },
    { name: "About Us", url: "/about-us" },
  ];

  const toggleSubSegment = (segmentName: string) => {
    setActiveSegment((prev) => (prev === segmentName ? null : segmentName));
  };

  return (
    <div className="relative">
      {/* Main Header */}
      <div className="flex justify-between items-center h-20 w-full bg-[#1f80f0] px-8">
        <Image
          src="icons/logo.svg"
          priority
          alt="logo"
          width={140}
          height={140}
          className="h-32 w-32"
        />
        {open ? (
          <i
            onClick={() => setOpen((prev) => !prev)}
            className="text-white text-3xl cursor-pointer"
          >
            <RxCross2 />
          </i>
        ) : (
          <i
            onClick={() => setOpen((prev) => !prev)}
            className="text-white text-3xl cursor-pointer"
          >
            <IoIosMenu />
          </i>
        )}
      </div>

      {/* Sliding Sidebar Menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-[#1b76e9] z-50 transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col px-5 sm:px-10 pt-14">
          {segments.map((segment, index) => (
            <div key={index}>
              <ul className="text-white text-base">
                <li
                  className="mb-4 cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    segment.subSegments && toggleSubSegment(segment.name)
                  }
                >
                  <Link href={segment.url ? segment.url : "#"}>
                    {segment.name}
                  </Link>
                  {segment.subSegments && (
                    <span className="ml-2">
                      {activeSegment === segment.name ? (
                        <IoIosArrowUp className="text-white" />
                      ) : (
                        <IoIosArrowDown className="text-white" />
                      )}
                    </span>
                  )}
                </li>
                {segment.subSegments && activeSegment === segment.name && (
                  <div className="ml-6">
                    {segment.subSegments.map((subSegment, subIndex) => (
                      <li key={subIndex} className="mb-2">
                        <Link href={subSegment.url}>{subSegment.name}</Link>
                      </li>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* language dropdown menu */}

        <div className="flex justify-center items-center my-7">
          <LanguageDropdownMenu />
        </div>

        <div className="flex justify-center items-center mb-10 px-8">
          <button className="flex justify-center items-center border w-full py-2 text-xl rounded-md font-medium border-white bg-transparent text-white">
            Contact Us
            <span className="ml-2">
              <MdKeyboardArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallDeviceHeader;

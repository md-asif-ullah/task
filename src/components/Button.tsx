"use client";

import { cn } from "@/lib/utils";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  text: string;
  className?: string;
}

const Button = ({ text, className }: Props) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center border px-4 py-2 text-lg rounded-md border-white bg-transparent text-white hover:bg-white hover:text-[#1b76e9] transition cursor-pointer",
        className
      )}
    >
      {text}
      <MdKeyboardArrowRight className="ml-2 text-xl" />
    </button>
  );
};

export default Button;

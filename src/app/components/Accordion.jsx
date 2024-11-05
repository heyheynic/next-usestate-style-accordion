"use client";

import { useState } from "react";
import Item from "./Item";

const Accordion = () => {
  // const [openItem, setOpenItem] = useState()

  const [isOpen, setIsOpen] = useState(0);

  return (
    <div
      className="border-2 border-black 
    rounded-lg py-4 px-4 max-w-96 min-w-96 w-full flex flex-col gap-2 bg-white"
    >
      <h1 className="font-bold text-lg underline underline-offset-4 pb-2">
        FAQs
      </h1>
      <Item setIsOpen={setIsOpen} isOpen={isOpen} item={1} />
      <Item setIsOpen={setIsOpen} isOpen={isOpen} item={2} />
      <Item setIsOpen={setIsOpen} isOpen={isOpen} item={3} />
    </div>
  );
};

export default Accordion;

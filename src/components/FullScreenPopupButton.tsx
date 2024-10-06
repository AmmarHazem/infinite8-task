"use client";
import { FC, useState } from "react";
import FullScreenPopup from "./FullScreenPopup";

const FullScreenPopupButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Open
      </button>
      <FullScreenPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default FullScreenPopupButton;

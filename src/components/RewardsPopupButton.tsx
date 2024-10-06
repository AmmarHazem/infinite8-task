"use client";
import { FC, useState } from "react";
import RewardsPopup from "./RewardsPopup";

const RewardsPopupButton: FC<RewardsPopupButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-md" onClick={() => setIsOpen(true)}>
        Open Rewards Popup
      </button>
      <RewardsPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

interface RewardsPopupButtonProps {}

export default RewardsPopupButton;

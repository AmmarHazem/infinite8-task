import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { levelUpTextAnimationDuration } from "@/constants";
import ExperienceBar from "./ExperienceBar";
import ClaimNFTButton from "./ClaimNFTButton";
import Lottie from "react-lottie";
import * as animationData2 from "@/lottie-animations/Animation-1728070374218.json";
import Badge from "./Badge";
import Popup from "./Popup";

const FullScreenPopup: FC<FullScreenPopupProps> = ({ isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} className="bg-[url('/images/Leveluppopup-min.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col items-center h-full text-center relative pt-14 md:pt-2">
        <div className="absolute top-0 left-0 right-0 w-full h-full">
          <Lottie options={{ animationData: animationData2, loop: true }} ariaRole="presentation" isClickToPauseDisabled={true} />
        </div>
        <motion.img
          initial={{ y: 200, scale: 0 }}
          animate={{ y: [200, -100, 50, 0], scale: [0, 1, 1, 1] }}
          transition={{ ease: "easeOut", duration: levelUpTextAnimationDuration }}
          src="/images/level-up.png"
          loading="eager"
          alt="level up"
          width={815}
          height={183}
          className="w-[400px]"
        />
        <Badge />
        <p className="text-[#291911] text-5xl font-bold popup-title mt-12">Corporal</p>
        <ExperienceBar totalExperienceNumber={50000} progress={20} />
        <div className="mt-10 relative z-10">
          <ClaimNFTButton />
        </div>
        <p className="mt-10 font-bold text-2xl text-[#35241C]">You've leveled up and earned a new badge!</p>
        <p className="text-[#DCC794] mt-2">
          Claim your <span className="text-[#FFC850] font-bold">NFT badge</span> now, or retrieve it from you intentory.
        </p>
      </div>
    </Popup>
  );
};

interface FullScreenPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default FullScreenPopup;

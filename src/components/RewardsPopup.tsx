import { FC } from "react";
import { motion } from "framer-motion";
import Popup from "./Popup";
import Divider from "./Divider";
import Lottie from "react-lottie";
import * as animationData2 from "@/lottie-animations/Animation-1728070469192.json";

const RewardsPopup: FC<RewardsPopupProps> = ({ isOpen, onClose }) => {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-[750px] max-h-[550px] md:max-h-[500px] bg-[url('/images/Group1000002084qwlkejrkqwbeqvb-min.png')] bg-no-repeat bg-cover bg-center"
    >
      <div className="text-[#F3BA2F] text-center flex flex-col items-center justify-center h-full relative">
        <div className="absolute top-0 left-0 right-0 w-full h-full">
          <Lottie
            options={{ animationData: animationData2, loop: false }}
            ariaRole="presentation"
            isClickToPauseDisabled={true}
          />
        </div>
        <h2 className="text-4xl font-extrabold">Congratulations!</h2>
        <p className="text-2xl">Command completed Successfully!</p>
        <p className="mt-10 text-[#C8AA7A]">
          You have successfully completed a command! Here are your well-earned rewards. Keep exploring the Command Center roe even
          more exciting mission and bigger rewards!
        </p>
        <p className="text-[#C8AA7A] mb-8">You have gained:</p>
        <Divider />
        <div className="flex gap-8 justify-center items-center mt-8">
          <motion.img
            initial={{ x: 1000, rotate: 1000 }}
            animate={{ x: 0, rotate: 0 }}
            transition={{
              duration: 1,
            }}
            src="/images/GroupASLKDFKJADSNF1000002084.png"
            width={100}
            height={100}
            alt="100 xp"
          />
          <motion.img
            initial={{ x: 1000, rotate: 1000 }}
            animate={{ x: 0, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            src="/images/GrouplKSDFKLSNF1000002085.png"
            width={100}
            height={100}
            alt="250000"
          />
        </div>
      </div>
    </Popup>
  );
};

interface RewardsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default RewardsPopup;

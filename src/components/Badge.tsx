import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { levelUpTextAnimationDuration } from "@/constants";
import Lottie from "react-lottie";
import * as animationData3 from "@/lottie-animations/Animation-1728070441638.json";
import * as animationData from "@/lottie-animations/Animation-1728070204121.json";

const Badge: FC = () => {
  const [isStop, setIsStop] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsStop(false);
    }, levelUpTextAnimationDuration * 1000);
    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <div className="relative">
      {!isStop && (
        <div className="absolute inset-0 w-full h-full scale-[2]">
          <Lottie
            isStopped={isStop}
            isPaused={isStop}
            options={{ animationData: animationData3, loop: true }}
            ariaRole="presentation"
            isClickToPauseDisabled={true}
          />
        </div>
      )}
      {!isStop && (
        <div className="absolute bottom-[-75px] left-0 w-full h-[500px] z-10">
          <Lottie
            isStopped={isStop}
            isPaused={isStop}
            options={{ animationData: animationData, loop: false }}
            ariaRole="presentation"
            isClickToPauseDisabled={true}
          />
        </div>
      )}
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: levelUpTextAnimationDuration + 0.7 }}
        className="w-[200px]"
        src={"/images/Lieutenant101-min.png"}
        alt="level up"
        width={448}
        height={367}
      />
    </div>
  );
};

export default Badge;

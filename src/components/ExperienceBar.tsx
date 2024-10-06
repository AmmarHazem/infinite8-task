import { animate, motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { FC, useEffect, useState } from "react";

const animationDuration = 5;

const ExperienceBar: FC<ExperienceBarProps> = ({ progress, totalExperienceNumber }) => {
  const [count, setCount] = useState(0);
  const motionValue = useMotionValue(0);

  useMotionValueEvent(motionValue, "change", (value) => {
    setCount(Math.round(value));
  });

  useEffect(() => {
    const progressUntil = (totalExperienceNumber * progress) / 100;
    const animation = animate(motionValue, progressUntil, { duration: animationDuration, ease: "easeOut" });
    return () => {
      animation.stop();
    };
  }, [progress, totalExperienceNumber]);

  return (
    <div className="max-w-[600px] w-full">
      <div className="flex font-semibold justify-between w-full mb-2">
        <p className="">
          <span className="text-white me-2">XP:</span>
          <span className="text-[#F08E3C]">{count.toLocaleString()}</span>
        </p>
        <p className="text-white">{totalExperienceNumber.toLocaleString()}</p>
      </div>
      <div className="bg-[#35241C] progress-bar-shadow w-full min-h-[22px] h-[22px] p-1 rounded-sm">
        <motion.div
          initial={{ width: "0px" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: animationDuration, ease: "easeOut" }}
          className="progress h-full rounded-sm"
        />
      </div>
    </div>
  );
};

interface ExperienceBarProps {
  progress: number;
  totalExperienceNumber: number;
}

export default ExperienceBar;

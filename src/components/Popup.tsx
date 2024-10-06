import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import Image from "next/image";

const Popup: FC<PopupProps> = ({ isOpen, children, className, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 100 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            ease: "circOut",
            duration: 0.2,
          }}
          className={`fixed inset-0 z-50 w-screen h-screen m-auto ${className}`}
        >
          <div className="w-full h-full overflow-y-scroll p-4 relative">
            <button className="text-white absolute top-4 right-4 z-10" onClick={onClose}>
              <Image
                src={"/images/Groupsalkdfjlkasdjfkasdbf1000002076.png"}
                className="w-[25px]"
                alt="close"
                width={64}
                height={64}
              />
            </button>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface PopupProps {
  isOpen: boolean;
  className?: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default Popup;

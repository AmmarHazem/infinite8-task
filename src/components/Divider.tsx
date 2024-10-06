import Image from "next/image";
import { FC } from "react";

const Divider: FC = () => {
  return (
    <div className="flex gap-2 text-white items-center justify-center w-full">
      <Image src="/images/Group1000002081-left.png" alt="divider" width={501} height={21} className="w-[30%]" />
      <p className="pt-2">Rewards</p>
      <Image src="/images/Group1000002082-right.png" alt="divider" width={501} height={21} className="w-[30%]" />
    </div>
  );
};

export default Divider;

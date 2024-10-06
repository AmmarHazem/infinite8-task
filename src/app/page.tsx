import FullScreenPopupButton from "@/components/FullScreenPopupButton";
import RewardsPopupButton from "@/components/RewardsPopupButton";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black gap-8">
      <FullScreenPopupButton />
      <RewardsPopupButton />
    </div>
  );
}

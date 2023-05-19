import Image from "next/image";
import Frago from "./Fragonard.jpg";
import Eyck from "./VanEyck.jpg";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex flex-row">
        <div className="w-[416px] h-[740px] bg-blue-400">
          <Image src={Frago} alt="" fill={true} className="object-cover" />
        </div>
        <div className="w-[416px] h-[740px] bg-red-500">
          <Image src={Eyck} alt="" fill={true} className="object-cover" />
        </div>
      </div>
    </main>
  );
}

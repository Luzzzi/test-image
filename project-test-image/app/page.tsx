import Image from "next/image";
import Frago from "./Fragonard.jpg";
import Eyck from "./VanEyck.jpg";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex flex-row">
        <div className="w-full h-auto bg-blue-400">
          <Image src={Frago} alt="" width={416} height={740} />
        </div>
        <div className="w-full h-auto bg-red-500">
          <Image src={Eyck} alt="" width={416} height={740} />
        </div>
      </div>
    </main>
  );
}

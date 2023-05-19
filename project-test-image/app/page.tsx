import Image from "next/image";
import Frago from "./Fragonard.jpg";
import Eyck from "./VanEyck.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-between overflow-x-auto">
        <div className="w-full h-auto relative rounded-md overflow-hidden">
          <Image src={Frago} alt="" fill={true} className="objet-cover" />
        </div>
        <div className="w-full h-auto relative rounded-md overflow-hidden">
          <Image src={Eyck} alt="" fill={true} className="objet-cover" />
        </div>
      </div>
    </main>
  );
}

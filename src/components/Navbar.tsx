import OnlynudesLogo from "../../public/assets/onlynudes-logo-small.png";
import Image from "next/image";
import { Dancing_Script, Inter } from "next/font/google";
const dancing_script = Dancing_Script({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
import { AiFillCrown } from "react-icons/ai";
export default function Navbar() {
  const handleClick = (link: string) =>
    window.open(
      link,
      "Invite Bot",
      "menubar=0,resizable=0,width=500,height=800"
    );

  return (
    <div
      className={`h-16 flex items-center justify-between gap-2 p-5 py-10 bg-black bg-opacity-80 backdrop-blur-lg`}
    >
      <div className="h-16 flex items-center gap-5">
        <Image
          className="h-full w-auto"
          src={OnlynudesLogo}
          alt="Onlynudes Logo - The Onlynudes logo"
        />
        <h2
          className={`text-2xl text-main ${dancing_script.className} logo-text`}
        >
          Onlynudes
        </h2>
        <button
          className={`text-white ${inter.className}`}
          onClick={() => handleClick("https://invite.onlynudes.site")}
        >
          Discord Bot
        </button>
        <button
          className={`text-white ${inter.className}`}
          onClick={() => handleClick("https://discord.onlynudes.site")}
        >
          Support Server
        </button>
      </div>
      <div>
        <button
          className="
        flex items-center gap-1 text-white bg-yellow-500
        bg-opacity-50 hover:bg-opacity-80 ease-in-out transition-all
        duration-300 button-shadow px-4 py-2 rounded-lg"
        >
          <AiFillCrown /> Permium
        </button>
      </div>
    </div>
  );
}

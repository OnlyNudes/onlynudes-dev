import OnlynudesLogo from "../../public/assets/onlynudes-logo-small.png";
import { AiFillCrown, AiFillRobot, AiOutlineMenu } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { Dancing_Script, Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsDiscord } from "react-icons/bs";

const dancing_script = Dancing_Script({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (link: string, type: string) =>
    window.open(link, type, "menubar=0,resizable=0,width=500,height=800");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div
        className={`h-16 flex items-center sm:hidden justify-between gap-2 p-5 py-10 bg-black bg-opacity-80 backdrop-blur-lg z-50`}
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
            onClick={() =>
              handleClick("https://invite.onlynudes.site", "Invite Bot")
            }
          >
            Discord Bot
          </button>
          <button
            className={`text-white ${inter.className}`}
            onClick={() =>
              handleClick("https://discord.onlynudes.site", "Join Server")
            }
          >
            Support Server
          </button>
          <a
            href="https://docs.onlynudes.site"
            className={`text-white ${inter.className}`}
          >
            Docs
          </a>
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
      <div className="hidden sm:flex flex-row items-center h-12 justify-between py-8 bg-black z-30 bg-opacity-70 border-b border-[#3b3b3b] backdrop-blur-lg">
        <div className="relative">
          <AiOutlineMenu
            color="#fff"
            className="cursor-pointer ml-3"
            size={24}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, translateY: -100 }}
              animate={{ opacity: 1, translateY: 0 }}
              className="absolute left-3 top-8 z-[999] bg-[#242424] rounded-md w-44 h-32 p-2"
              ref={menuRef}
            >
              <a
                href="https://invite.onlynudes.site"
                className="flex flex-row items-center gap-2 text-white mb-3"
              >
                <AiFillRobot color="#fff" size={18} />
                <span>Discord Bot</span>
              </a>
              <a
                href="https://discord.onlynudes.site"
                className="flex flex-row items-center gap-2 text-white mb-3"
              >
                <BsDiscord color="#fff" size={18} />
                <span>Discord Server</span>
              </a>
              <div className="w-full h-[1px] bg-[#313131]" />
              <a
                href="https://docs.onlynudes.site"
                className="flex flex-row items-center gap-2 text-white mt-3"
              >
                <ImBook color="#fff" size={18} />
                <span>Docs</span>
              </a>
            </motion.div>
          ) : null}
        </div>
        <Image
          className="h-12 w-12 ml-12"
          src={OnlynudesLogo}
          alt="Onlynudes Logo - The Onlynudes logo"
        />
        <h2
          className={`text-2xl text-main ${dancing_script.className} logo-text mr-3`}
        >
          Onlynudes
        </h2>
      </div>
    </>
  );
}

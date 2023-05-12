import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { BsDiscord } from "react-icons/bs";
import Image from "next/image";
export default function Content() {
  const handleClick = (link: string) =>
    window.open(
      link,
      "Invite Bot",
      "menubar=0,resizable=0,width=500,height=800"
    );
  return (
    <div className="w-full h-full fixed -z-[2] grid place-items-center left-0 bg-black bg-opacity-60 text-white">
      <div className="flex flex-col items-center gap-2 mb-32 sm:mx-2">
        <Image src="/assets/logotext.png" alt="Onlynudes Text Logo" />
        <h1 className="text-3xl font-bold sm:text-center xsm:text-2xl">
          The Most Interactive NSFW Discord Bot
        </h1>
        <p className="xsm:text-sm text-center">
          Get HQ Content Galore - Videos, Articles & More!
        </p>
        <div className="flex items-center">
          <button
            onClick={() => handleClick("https://invite.onlynudes.site")}
            className={`flex items-center justify-center py-2 px-3 rounded-lg gap-1 text-lg mt-2 bg-main sm:py-2 sm:h-fit sm:px-1 sm:text-sm sm:gap-2 ${inter.className}`}
          >
            <BsDiscord />
            Add to Discord
          </button>
          <button
            onClick={() => handleClick("https://invite.onlynudes.site")}
            className={`flex items-center justify-center py-2 px-3 rounded-lg gap-1 text-lg mt-2 sm:text-sm ${inter.className}`}
          >
            Join Server
          </button>
        </div>
      </div>
    </div>
  );
}

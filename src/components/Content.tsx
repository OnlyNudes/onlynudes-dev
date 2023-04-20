import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { BsDiscord } from "react-icons/bs";

export default function Content() {
  const handleClick = (link: string) =>
    window.open(
      link,
      "Invite Bot",
      "menubar=0,resizable=0,width=500,height=800"
    );
  return (
    <div
      className={`h-[calc(100vh-5rem)] flex flex-col items-center justify-center  bg-black bg-opacity-60 text-white`}
    >
      <h1 className="text-3xl font-bold ">
        The most interactive NSFW Discord Bot
      </h1>
      <p>No bullshit, just a shit ton of content with HQ Quality</p>
      <div className="flex">
        <button
          onClick={() => handleClick("https://invite.onlynudes.site")}
          className={`flex items-center justify-center py-2 px-3 rounded-lg gap-1 text-lg mt-2 bg-main ${inter.className}`}
        >
          <BsDiscord />
          Add to Discord
        </button>
        <button
          onClick={() => handleClick("https://invite.onlynudes.site")}
          className={`flex items-center justify-center py-2 px-3 rounded-lg gap-1 text-lg mt-2 ${inter.className}`}
        >
          Join Server
        </button>
      </div>
    </div>
  );
}

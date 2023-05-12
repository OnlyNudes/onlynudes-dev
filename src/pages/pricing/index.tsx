import Navbar from "@/components/Navbar";
import { BsCheckCircleFill, BsXCircleFill, BsDiscord } from "react-icons/bs";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div
          className={`${inter.className} mx-auto  text-center flex flex-col gap-3 mt-10 text-white`}
        >
          <h1 className={`font-bold text-white text-6xl `}>Pricing</h1>
          <p className="text-zinc-400">Stable, Efficient, HQ</p>
        </div>
        <div
          className={`text-white ${inter.className} w-fit grid grid-cols-3 gap-5 mx-auto mt-10 md:grid-cols-1`}
        >
          <div className="bg-zinc-800 p-5 w-56  mx-auto rounded-xl hover:scale-105 transition-all duration-200">
            <h2 className="px-3 py-1 rounded-md bg-zinc-600 bg-opacity-80 w-fit text-pink-100 font-bold">
              Free
            </h2>
            <h1 className="text-zinc-300 text-2xl font-bold mt-5">Starter</h1>
            <p className="text-sm text-zinc-400">Test our api in your app</p>
            <div className="px-2 mt-5 flex flex-col gap-2">
              <h3 className="text-lg">Features</h3>
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-pink-500" />
                <p className="text-xs">50 AI Images Generations</p>
              </div>
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-pink-500" />
                <p className="text-xs">1000 Tiktok Videos</p>
              </div>
              <div className="flex items-center gap-2">
                <BsXCircleFill className="text-zinc-600" />
                <p className="text-xs">Pornpics Api</p>
              </div>
              <div className="flex items-center gap-2">
                <BsXCircleFill className="text-zinc-600" />
                <p className="text-xs">Pornhub Api</p>
              </div>
              <div className="flex items-center gap-2">
                <BsXCircleFill className="text-zinc-600" />
                <p className="text-xs">Pornhub Downloader</p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 p-5 w-56  mx-auto rounded-xl plans-shadow hover:scale-105 transition-all duration-200">
            <h2 className="px-3 py-1 rounded-md bg-pink-400 bg-opacity-80 w-fit text-pink-100 font-bold">
              Basic
            </h2>
            <h1 className="text-pink-300 text-2xl font-bold mt-5">
              11.5$ <span className="text-sm text-zinc-500">/mo</span>
            </h1>
            <p className="text-sm text-pink-400">Power your app with our api</p>
            <div className="px-2 mt-5 flex flex-col gap-2">
              <h3 className="text-lg">Features</h3>
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-pink-500" />
                <p className="text-xs">1300 AI Images Generations</p>
              </div>
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-pink-500" />
                <p className="text-xs">Unlimited Tiktok Videos</p>
              </div>
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-pink-500" />
                <p className="text-xs">Pornpics Api</p>
              </div>
              <div className="flex items-center gap-2">
                <BsXCircleFill className="text-zinc-600" />
                <p className="text-xs">Pornhub Api</p>
              </div>
              <div className="flex items-center gap-2">
                <BsXCircleFill className="text-zinc-600" />
                <p className="text-xs">Pornhub Downloader</p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 p-5 w-56  mx-auto rounded-xl plans-shadow bg-gradient-best hover:scale-105 transition-all duration-200">
            <h2 className="px-3 py-1 rounded-md bg-pink-100 bg-opacity-90 w-fit text-black font-bold plans-shadow">
              Ultra
            </h2>
            <h1 className="text-zinc-800 text-2xl font-bold mt-5">
              23$ <span className="text-sm text-zinc-700">/mo</span>
            </h1>
            <p className="text-sm text-zinc-800">
              Scale up and outship your competitors.
            </p>
            <div className="px-2 mt-5 flex flex-col gap-2">
              <h3 className="text-lg">Features</h3>
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-white" />
                <p className="text-xs">3000 AI Images Generations</p>
              </div>
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-white" />
                <p className="text-xs">Unlimited Tiktok Videos</p>
              </div>
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-white" />
                <p className="text-xs">Pornpics Api</p>
              </div>
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-white" />
                <p className="text-xs">Pornhub Api</p>
              </div>
              <div className="flex items-center gap-2">
                <BsCheckCircleFill className="text-white" />
                <p className="text-xs">Pornhub Downloader</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full mt-5 ${inter.className}`}>
          <h2 className="text-white text-center flex items-center justify-center gap-2">
            Are you interested in purchasing our API plan? Let's chat on{" "}
            <a
              href="https://discord.gg/onlynudesbot"
              className="flex items-center justify-center gap-1"
            >
              <span className="text-pink-500 underline">Discord</span>
              <BsDiscord className="text-pink-500" />
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

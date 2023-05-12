import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import Head from "next/head";
import { useEffect, useRef } from "react";
export default function Home() {
  const videoEl = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoEl.current?.play();
  }, []);
  return (
    <>
      <Head>
        <title>
          OnlyNudes Bot - Experience Limitless NSFW Possibilities with
          OnlyNudes, the Best Bot on Discord
        </title>
        <meta
          name="description"
          content="As the most popular bot in the Discord community, OnlyNudes offers unlimited access to the hottest porn and nude content from top sites like Pornhub and Pornpics. And with seamless integration into your Discord server, accessing your favorite content has never been easier! Whether you're a seasoned pro or new to the world of NSFW, our AI-powered bot is sure to exceed your expectations."
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <Content />
      <video
        ref={videoEl}
        className="bg-video"
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        src="/assets/main.mp4"
      ></video>
    </>
  );
}

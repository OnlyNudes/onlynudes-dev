import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <video
        className="bg-video"
        controls={false}
        autoPlay
        muted
        loop
        src="/assets/main.mp4"
      ></video>
    </>
  );
}

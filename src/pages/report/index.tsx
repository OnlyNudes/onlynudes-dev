import React, { useState } from "react";
import { useRouter } from "next/router";

import axios, { AxiosResponse } from "axios";

import type { RadioChangeEvent } from "antd";
import { Radio, ConfigProvider } from "antd";
import Head from "next/head";
import Image from "next/image";
import Recaptcha from "@/components/ReCAPTCHA";

import {
  BsMenuDown,
  BsChatSquareDotsFill,
  BsFillFileImageFill,
} from "react-icons/bs";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Report() {
  const router = useRouter();
  const { channelid, messageid, url } = router.query;
  const [reason, setReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [reported, setReported] = useState(false);
  const reportContent = () => {
    axios
      .post("https://api.onlynudes.site/v1/report/submit", {
        channelid,
        messageid,
        reason,
        customreason: customReason,
        url,
        captcha,
      })
      .then((res: AxiosResponse) => {
        if (res.data.success) {
          setReported(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChange = (e: RadioChangeEvent) => {
    setReason(e.target.value);
  };
  const handleVerify = (response: string) => {
    setCaptcha(response);
  };
  const handleReason = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomReason(e.target.value);
  };
  return (
    <>
      <Head>
        <title>Onlynudes Bot • Report Autoporn Post</title>
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

      <div
        className={`${inter.className} w-full h-screen flex items-center justify-center bg-zinc-700`}
        style={{
          background: "url(/assets/pattern.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {!reported ? (
          <div className="bg-zinc-800  rounded-3xl p-5 px-10 flex flex-col items-center justify-center">
            <h2 className="text-white text-3xl text-center mb-5 font-bold md:text-xl">
              Reporting Autoporn Content
            </h2>
            <div className="grid grid-cols-2 items-center justify-center gap-4 md:text-sm md:grid-cols-1">
              <div className="bg-zinc-700 text-white px-2 py-1 rounded-lg flex items-center gap-2">
                <BsMenuDown className="text-main" /> {channelid}
              </div>
              <div className="bg-zinc-700 text-white px-2 py-1 rounded-lg flex items-center gap-2">
                <BsChatSquareDotsFill className="text-main" />
                {messageid}
              </div>
            </div>
            <div className="mt-3 bg-zinc-700 text-blue-400 px-2 py-1 rounded-lg flex items-center gap-2 md:text-sm">
              <BsFillFileImageFill className="text-main" />
              <a href={`${url}`}>Content</a>
            </div>
            <div></div>
            <div className="mt-3 flex flex-col items-center ">
              <ConfigProvider
                theme={{
                  components: {
                    Radio: {
                      colorPrimary: "#EB559E",
                    },
                  },
                }}
              >
                <Radio.Group
                  onChange={onChange}
                  value={reason}
                  className="flex flex-col gap-2"
                >
                  <Radio
                    value={"personal"}
                    className={`${inter.className} text-white md:text-sm`}
                  >
                    I don&apos;t like this image
                  </Radio>
                  <Radio
                    value={"ad-content"}
                    className={`${inter.className} text-white md:text-sm`}
                  >
                    Image contains advertising
                  </Radio>
                  <Radio
                    value={"illegal"}
                    className={`${inter.className} text-white md:text-sm`}
                  >
                    Illegal content
                  </Radio>
                  <Radio
                    value={"dmca"}
                    className={`${inter.className} text-white md:text-sm`}
                  >
                    Copyright content
                  </Radio>
                  <Radio
                    value={"wrong-category"}
                    className={`${inter.className} text-white md:text-sm`}
                  >
                    Wrong category
                  </Radio>
                  <Radio
                    value={"custom"}
                    className={`${inter.className} text-white`}
                  >
                    Other, check and write below
                  </Radio>
                </Radio.Group>
              </ConfigProvider>
              {reason === "custom" ? (
                <div>
                  <textarea
                    onChange={handleReason}
                    className="bg-zinc-700 rounded-lg resize-none w-52 h-24 mt-2 text-white p-1 text-sm"
                  ></textarea>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="my-5 ">
              <Recaptcha onVerify={handleVerify} />
            </div>
            <button
              disabled={
                reason.length < 1
                  ? true
                  : reason === "custom" && customReason.length < 5
                  ? true
                  : captcha.length < 1
                  ? true
                  : false
              }
              className=" bg-main px-4 py-2 rounded-3xl text-white disabled:bg-maindisabled disabled:cursor-not-allowed hover:bg-maindisabled transition-all"
              onClick={reportContent}
            >
              {reason.length < 1
                ? "Please Select a reason"
                : reason === "custom" && customReason.length < 5
                ? "Please type your reason"
                : captcha.length < 1
                ? "Please check the captcha"
                : "Submit"}
            </button>
          </div>
        ) : (
          <div className="bg-zinc-800  rounded-3xl p-5 flex flex-col items-center justify-center">
            <Image
              src="https://cdn.discordapp.com/attachments/1089602865250713742/1103416004819812445/D2hSiLdto5.gif"
              alt="Onlynudes Character"
              width={300}
              height={300}
            />
            <h2 className="text-white text-3xl text-center mt-5 font-bold">
              Successfully Reported
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

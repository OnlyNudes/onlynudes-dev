import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import type { RadioChangeEvent } from "antd";
import { Radio, ConfigProvider } from "antd";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Recaptcha from "@/components/ReCAPTCHA";
import { addListener, launch } from "devtools-detector";
export default function Report() {
  const router = useRouter();
  const { channelid, messageid, url } = router.query;
  const [reason, setReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [reported, setReported] = useState(false);
  const reportContent = () => {
    axios
      .post("/api/report", {
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
        <title>Report Autoporn Post</title>
      </Head>

      <div className=" w-full h-screen flex items-center justify-center ">
        {!reported ? (
          <div className="bg-zinc-800  rounded-3xl p-5 flex flex-col items-center justify-center">
            <h2 className="text-white text-3xl text-center mb-5 font-bold">
              Reporting Autonude Content
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-zinc-700 text-white px-2 py-1 rounded-lg ">
                {channelid}
              </div>
              <div className="bg-zinc-700 text-white px-2 py-1 rounded-lg ">
                {messageid}
              </div>
              <div className="bg-zinc-700 text-blue-400 px-2 py-1 rounded-lg ">
                <a href={url === undefined ? url : "https://onlynudes.site"}>
                  Content
                </a>
              </div>
            </div>
            <div></div>
            <div className="mt-3 flex flex-col items-center">
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
                  className="flex flex-col "
                >
                  <Radio value={"personal"} className="text-white">
                    I don&apos;t like this image
                  </Radio>
                  <Radio value={"ad-content"} className="text-white">
                    Image contains advertising
                  </Radio>
                  <Radio value={"illegal"} className="text-white">
                    Illegal content
                  </Radio>
                  <Radio value={"dmca"} className="text-white">
                    Copyright content
                  </Radio>
                  <Radio value={"wrong-category"} className="text-white">
                    Wrong category
                  </Radio>
                  <Radio value={"custom"} className="text-white">
                    Other&comma; check and write below
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
            <div className="my-5">
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
              className=" bg-main px-4 py-2 rounded-3xl text-white disabled:bg-maindisabled disabled:cursor-not-allowed"
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

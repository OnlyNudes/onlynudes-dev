// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { reason, customreason, channelid, messageid, url, captcha } = req.body;
  if (!captcha) {
    res.status(400).json({ success: false, message: "Captcha Reqiured" });
    return;
  }
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRETKEY}&response=${captcha}`
  );
  if (data.success) {
    axios.post(process.env.REPORT_WEBHOOK!, {
      username: "Content Report",
      content: `<:emojiproblem:1090252155031654410> \`${channelid}\` \`${messageid}\` [content](${url})\n<:forward:1091826662053777509> Reason: \`${reason}\`\n> ${customreason}`,
    });
    res.status(200).json({ success: true, message: "Successfuly reported" });
  } else {
    res.status(400).json({ success: false, message: "Captcha Invalid" });
    return;
  }
}

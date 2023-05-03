import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  onVerify: (response: string) => void;
}

const Recaptcha: React.FC<Props> = ({ onVerify }) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleVerify = (token: string | null) => {
    if (token) {
      setRecaptchaToken(token);
      onVerify(token);
    }
  };

  return (
    <ReCAPTCHA
      sitekey="6LcGZtwlAAAAANwL9jLevaBpSu6IHyQAyl3uzubp"
      onChange={handleVerify}
    />
  );
};

export default Recaptcha;

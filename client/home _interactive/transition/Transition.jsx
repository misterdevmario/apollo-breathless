import { useInfo } from "@/context/Context";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./transition.css";

const Transition = () => {
  const [className, setClassName] = useState("none");
  const { language, info } = useInfo();

  useEffect(() => {
    if (info.length == 0 || language == "en" || language == "es") {
      setClassName("transition");
    }
    setTimeout(() => {
      setClassName("none");
    }, 3000);
  }, [language, info]);
  return (
    <div className={className}>
      <Image src="/breathless.png" width={500} height={500} alt="hourglass logo" />
    </div>
  );
};

export default Transition;

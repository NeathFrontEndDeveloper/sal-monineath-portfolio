import { useEffect, useState } from "react";
import { titles } from "@/constants/dataConsts";
import { useRouter } from "next/navigation";

export const useTypingEffect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentIndex];

    const timer = setTimeout(
      () => {
        if (typing) {
          if (text.length < currentTitle.length) {
            setText(currentTitle.slice(0, text.length + 1));
          } else {
            setTimeout(() => setTyping(false), 1000);
          }
        } else {
          if (text.length > 0) {
            setText(text.slice(0, -1));
          } else {
            setTyping(true);
            setCurrentIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      typing ? 100 : 50
    );

    return () => clearTimeout(timer);
  }, [text, typing, currentIndex]);

  return text;
};

export const useViewWork = () => {
  const router = useRouter();
  return () => {
    router.push("/project");
  };
};

export const useConnect = () => {
  const router = useRouter();
  return () => {
    router.push("/contact");
  };
};

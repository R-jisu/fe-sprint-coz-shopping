import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { styled } from "styled-components";
import { BoldP } from "../style/main.style";

const ShadowDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px rgba(78, 78, 78, 0.5);
  border-radius: 12px;
  padding: 12px;
  z-index: 10;
`;

const ToastLi = ({ isBookmark = true }) => {
  const [fadeAnimation, setFadeAnimation] = useState("animate__fadeIn");
  useEffect(() => {
    const timer = setTimeout(() => {
      //제거, class변경
      setFadeAnimation("animate__fadeOut");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const msg = isBookmark
    ? "상품이 북마크에 추가되었습니다."
    : "상품이 북마크에서 제거되었습니다";

  return (
    <ShadowDiv
      className={`flex justify-center items-center text-base p-[0.5rem] bg-white mt-3 animate__animted ${fadeAnimation}`}
    >
      <AiFillStar
        className="mr-[3px]"
        color={isBookmark ? "#FFD361" : "#DFDFDF"}
      />
      <BoldP>{msg}</BoldP>
    </ShadowDiv>
  );
};

export default ToastLi;

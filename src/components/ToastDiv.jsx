import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { toastActions } from "../store/toast-slice";
import { BoldP } from "../style/main.style";

const Toast = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 15px 21px;
`;

const ToastDiv = ({ action }) => {
  const dispatch = useDispatch();
  const [fadeAnimation, setFadeAnimaton] = useState("animate__fadeIn");
  useEffect(() => {
    setTimeout(() => {
      setFadeAnimaton("animate__fadeOut");
      dispatch(toastActions.deQue());
    }, 5000);
  }, []);

  return (
    <Toast
      className={`flex justify-center items-center mt-3 bg-white animate__animated ${fadeAnimation}`}
    >
      <AiFillStar
        className="mr-1"
        color={action === "remove" ? "#DFDFDF" : "#FFD361"}
      />
      <BoldP>
        {action === "remove"
          ? "상품에서 북마크를 제거 했습니댜."
          : "상품에 북마크를 추가했습니다"}
      </BoldP>
    </Toast>
  );
};

export default ToastDiv;

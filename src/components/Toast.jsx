import ReactDOM from "react-dom";
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

const Toast = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <ShadowDiv className="fixed bottom-5 right-5 flex items-center justify-center text-base p-[0.5rem] gap-1 bg-white">
          <AiFillStar color="#FFD361" />
          <BoldP>상품이 북마크에 추가되었습니다.</BoldP>
        </ShadowDiv>,
        document.getElementById("root")
      )}
    </>
  );
};

export default Toast;

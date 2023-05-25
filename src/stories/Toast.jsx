import { AiFillStar } from "react-icons/ai";
import { styled } from "styled-components";
import { BoldP } from "../style/main.style";

const Toast = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 15px 21px;
`;

const ToastDiv = ({ primary, bookmark, label, ...props }) => {
  const mode = primary
    ? "storybook-toast--primary"
    : "storybook-toast--secondary";

  return (
    <Toast
      className={`flex justify-center items-center mt-3 bg-white ${mode}`}
      {...props}
    >
      <AiFillStar color={bookmark === "remove" ? "#DFDFDF" : "#FFD361"} />
      <BoldP>{label}</BoldP>
    </Toast>
  );
};

export default ToastDiv;

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

const ToastDiv = ({ primary, action, label, ...props }) => {
  const mode = primary
    ? "storybook-toast--primary"
    : "storybook-toast--secondary";

  return (
    <Toast className={mode} {...props}>
      <AiFillStar color={action === "remove" ? "#DFDFDF" : "#FFD361"} />
      <BoldP>{label}</BoldP>
    </Toast>
  );
};

export default ToastDiv;

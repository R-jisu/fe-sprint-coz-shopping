import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const Div = styled.div`
  width: 16.5rem;
`;
const CardDiv = styled.div`
  height: 13.3rem;
  border-radius: 12px;
  background-color: purple;
  cursor: pointer;
`;

export const Card = ({ children }) => {
  //Todo 북마크 기능 추가 시 리덕스로 구현
  const [isBookmark, setIsBookmark] = useState(false);
  const HandleBookmark = () => {
    setIsBookmark(!isBookmark);
  };
  return (
    <Div>
      <CardDiv className="relative w-full h-full">
        <AiFillStar
          onClick={HandleBookmark}
          color={isBookmark ? "#FFD361" : "#DFDFDF"}
          size="1.5rem"
          className="absolute right-[0.75rem] bottom-[0.75rem]"
        />
      </CardDiv>
      {children}
    </Div>
  );
};

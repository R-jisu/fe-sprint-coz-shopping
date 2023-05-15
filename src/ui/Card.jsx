import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UIActions } from "../store/ui-slice";

const Div = styled.div`
  width: 16.5rem;
`;
const CardDiv = styled.div`
  height: 13.3rem;
  border-radius: 12px;
  background-color: lightgray;
  cursor: pointer;
  background-image: url(${(props) => props.imgprop});
  background-size: cover;
`;

export const Card = ({ children, img, id, title }) => {
  const dispatch = useDispatch();
  //Todo 북마크 기능 추가 시 리덕스로 구현
  const [isBookmark, setIsBookmark] = useState(false);
  const HandleBookmark = () => {
    setIsBookmark(!isBookmark);
  };
  const modalHandler = () => {
    dispatch(UIActions.openModal({ img, id, title }));
  };
  return (
    <Div>
      <CardDiv
        imgprop={img}
        className="relative w-full h-full"
        onClick={modalHandler}
      >
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

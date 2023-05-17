import styled from "styled-components";
import { useDispatch } from "react-redux";
import { UIActions } from "../store/ui-slice";
import Star from "../components/Star";
import useScrollLock from "../hooks/use-scrollLock";

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
  const { lockScroll } = useScrollLock();

  const modalHandler = () => {
    lockScroll();
    dispatch(UIActions.openModal({ img, id, title }));
  };
  return (
    <Div>
      <CardDiv
        imgprop={img}
        className="relative w-full h-full"
        onClick={modalHandler}
      >
        <div className={`absolute right-[0.75rem] bottom-[0.75rem]`}>
          <Star id={id} onClick={(e) => e.stopPropagation()} />
        </div>
      </CardDiv>
      {children}
    </Div>
  );
};

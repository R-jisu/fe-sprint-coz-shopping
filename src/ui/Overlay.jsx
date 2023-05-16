import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Star from "../components/Star";
import { UIActions } from "../store/ui-slice";
import useScrollLock from "../hooks/use-scrollLock";

const CardDiv = styled.div`
  width: 46.5rem;
  height: 30rem;
  border-radius: 12px;
  background-color: lightgray;
  background-image: url(${(props) => props.imgprop});
  background-size: cover;
  padding: 1.5rem;
`;

const TitleP = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
`;

const ModalOverlay = () => {
  const info = useSelector((state) => state.ui.productInfo);
  const { openScroll } = useScrollLock();

  const dispatch = useDispatch();
  const closeHandler = () => {
    openScroll();
    dispatch(UIActions.closeModal());
  };
  return (
    <CardDiv
      imgprop={info.img}
      className="relative flex items-end cursor-default"
      onClick={(e) => e.stopPropagation()}
    >
      <AiOutlineClose
        onClick={closeHandler}
        size="1.54rem"
        color="white"
        className="absolute top-[1rem] right-[1rem] cursor-pointer"
      />
      <div className="flex gap-2 items-center">
        <Star id={info.id} onClick={(e) => e.stopPropagation()} />
        <TitleP>{info.title}</TitleP>
      </div>
    </CardDiv>
  );
};

const Backdrop = () => {
  const dispatch = useDispatch();
  const { openScroll } = useScrollLock();

  const closeHandler = () => {
    openScroll();
    dispatch(UIActions.closeModal());
  };
  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-white/[0.4] z-10 cursor-pointer"
      onClick={closeHandler}
    >
      <ModalOverlay />
    </div>
  );
};

const Overlay = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Overlay;

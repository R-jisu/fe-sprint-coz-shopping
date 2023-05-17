import { useNavigate } from "react-router-dom";
import error from "../assets/errorimg.jpeg";
const Error = ({ msg }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img className="w-1/4 h-1/4" src={error} alt="에러이미지" />
        <h1 className="text-[6rem] text-[red]">
          {msg ? msg : "잘못된 경로입니다."}
        </h1>
        <button type="button" onClick={goHome}>
          Home으로 가기
        </button>
      </div>
    </>
  );
};

export default Error;

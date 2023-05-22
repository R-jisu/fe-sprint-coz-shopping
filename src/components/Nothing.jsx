import pigonping from "../assets/pigonping.png";
import { BoldP } from "../style/main.style";

const Nothing = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={pigonping} alt="양파쿵야" className="w-40" />
      <BoldP>텅 비었어요...</BoldP>
    </div>
  );
};

export default Nothing;

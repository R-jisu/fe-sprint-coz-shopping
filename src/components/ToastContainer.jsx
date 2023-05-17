import { useSelector } from "react-redux";
import ToastDiv from "./ToastDiv";

const ToastContainer = () => {
  const que = useSelector((state) => state.toast.toastQue);
  console.log(que);
  return (
    <div className="fixed bottom-5 right-5">
      {que.length && que.map((toast) => <ToastDiv action={toast} />)}
    </div>
  );
};

export default ToastContainer;

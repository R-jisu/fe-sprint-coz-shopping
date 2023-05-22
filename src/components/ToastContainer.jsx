import { useSelector } from "react-redux";
import ToastDiv from "./ToastDiv";

const ToastContainer = () => {
  const que = useSelector((state) => state.toast.toastQue);
  return (
    <div className="fixed bottom-5 right-5">
      {que.length !== 0 &&
        que.map((toast, idx) => <ToastDiv key={idx} action={toast} />)}
    </div>
  );
};

export default ToastContainer;

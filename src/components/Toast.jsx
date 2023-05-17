import ReactDOM from "react-dom";

const ToastUlDiv = () => {
  return <div id="toast-root" className="fixed bottom-5 right-5 z-20"></div>;
};

const Toast = () => {
  return (
    <>
      {ReactDOM.createPortal(<ToastUlDiv />, document.getElementById("root"))}
    </>
  );
};

export default Toast;

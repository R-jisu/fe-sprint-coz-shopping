import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Overlay from "../components/Overlay";
import Toast from "../components/toast";

const Root = () => {
  const modalIsOpen = useSelector((state) => state.ui.isOpen);
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <Outlet />
      </main>
      <Footer />
      {modalIsOpen && <Overlay />}
      <Toast />
    </>
  );
};

export default Root;

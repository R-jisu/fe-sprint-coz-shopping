import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Overlay from "../ui/Overlay";

const Root = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <Outlet />
      </main>
      <Footer />
      <Overlay />
    </>
  );
};

export default Root;

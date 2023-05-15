import logo from "../assets/logo.svg";
import coz from "../assets/coz-shopping.svg";
import hamburger from "../assets/hamburger.svg";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  &::after {
    width: 0px;
    height: 0px;
    position: absolute;
    top: -15px;
    right: 30px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 16px solid white;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  }
`;

const Header = () => {
  const [isDropDownClick, setIsDropDownClick] = useState(false);
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };
  const DropDownHandler = () => {
    setIsDropDownClick(!isDropDownClick);
  };
  return (
    <>
      <StyledHeader className="sticky flex items-center w-full h-20 bg-white justify-between">
        <div className="flex cursor-pointer" onClick={onClickLogo}>
          <img className="ml-[4.75rem]" src={logo} alt="logo" />
          <img className="ml-[0.75rem]" src={coz} alt="cozshopping" />
        </div>
        <div className="relative">
          <img
            onClick={DropDownHandler}
            className="mr-[4.88rem] cursor-pointer"
            src={hamburger}
            alt="hamburger button"
          />
          {isDropDownClick && (
            <div className="absolute top-12 right-14">
              <Dropdown DropDownHandler={DropDownHandler} />
            </div>
          )}
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;

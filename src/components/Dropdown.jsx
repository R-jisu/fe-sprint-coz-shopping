import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineGift, AiOutlineStar } from "react-icons/ai";
import { useRef, useEffect } from "react";

const StyledUl = styled.ul`
  position: relative;
  width: 200px;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  &::after {
    content: "";
    position: absolute;
    top: -15px;
    right: 30px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 16px solid white;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  }
`;

const Dropdown = ({ DropDownHandler }) => {
  const dropdownRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        DropDownHandler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <StyledUl
      ref={dropdownRef}
      className="absoulte top-0 rounded-md bg-white flex flex-col items-center"
    >
      <Link
        to="/"
        onClick={DropDownHandler}
        className="w-full p-1 flex justify-center items-center border-b"
      >
        ooo님, 안녕하세요
      </Link>
      <Link
        to="/products/list"
        onClick={DropDownHandler}
        className="w-full p-1 flex justify-center items-center border-b"
      >
        <AiOutlineGift className="mr-[4px]" />
        상품리스트 페이지
      </Link>
      <Link
        to="bookmark"
        onClick={DropDownHandler}
        className="w-full p-1 flex justify-center items-center border-b"
      >
        <AiOutlineStar className="mr-[4px]" />
        북마크 페이지
      </Link>
    </StyledUl>
  );
};

export default Dropdown;

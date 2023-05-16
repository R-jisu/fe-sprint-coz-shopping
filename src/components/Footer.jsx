import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { inviewActions } from "../store/footer-inview-slice";

const FooterDiv = styled.div`
  border-top: 0.06rem solid #00000019;
  color: #888888;
  font-size: 0.75rem;
`;

const Footer = () => {
  const dispatch = useDispatch();
  const [ref, inView] = useInView();

  useEffect(() => {
    dispatch(inviewActions.setFooterInview(inView));
  }, [inView]);

  return (
    <FooterDiv ref={ref} className="flex flex-col justify-center items-center">
      <p>개인정보 처리방침 | 이용 약관</p>
      <p>All rights reserved @ Codestates</p>
      <p>inView 확인하기위한 text입니다 {inView.toString()}</p>
    </FooterDiv>
  );
};

export default Footer;

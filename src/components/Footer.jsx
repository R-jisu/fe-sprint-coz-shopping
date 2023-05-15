import styled from "styled-components";

const FooterDiv = styled.div`
  border-top: 0.06rem solid #00000019;
  color: #888888;
  font-size: 0.75rem;
`;

const Footer = () => {
  return (
    <FooterDiv className="flex flex-col justify-center items-center">
      <p>개인정보 처리방침 | 이용 약관</p>
      <p>All rights reserved @ Codestates</p>
    </FooterDiv>
  );
};

export default Footer;

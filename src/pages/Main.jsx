import styled from "styled-components";
import ProductBrand from "../components/ProductBrand";

const ListFont = styled.p`
  font-weight: Bold;
  font-size: 1.5rem;
  text-align: left;
`;

const Main = () => {
  return (
    <>
      <div>
        <ListFont>상품 리스트</ListFont>
        <ul className="flex gap-5">
          <li>
            <ProductBrand />
          </li>
          <li>
            <ProductBrand />
          </li>
          <li>
            <ProductBrand />
          </li>
          <li>
            <ProductBrand />
          </li>
        </ul>
      </div>
      <div>
        <ListFont>북마크 리스트</ListFont>
        <ul className="flex gap-5">
          <li>
            <ProductBrand />
          </li>
          <li>
            <ProductBrand />
          </li>
          <li>
            <ProductBrand />
          </li>
          <li>
            <ProductBrand />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Main;

import { useEffect, useState } from "react";
import * as Styled from "../style/main.style";
import ProductInstance from "./ProductInstance";
const ProductList = () => {
  const [mainList, setMainList] = useState(null);
  //Todo fetch함수 custom hook으로 만들기
  const fetchData = async () => {
    const response = await fetch(
      "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
    );
    const data = await response.json();
    setMainList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Styled.ListFont>상품 리스트</Styled.ListFont>
      {mainList && (
        <Styled.ListUL>
          {mainList.map((item) => {
            return (
              <li key={item.id}>
                <ProductInstance info={item} />
              </li>
            );
          })}
        </Styled.ListUL>
      )}
    </>
  );
};

export default ProductList;

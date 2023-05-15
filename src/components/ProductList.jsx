import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Styled from "../style/main.style";
import ProductInstance from "./ProductInstance";
const ProductList = () => {
  const [mainList, setMainList] = useState(null);
  const product = useSelector((state) => state.product);

  useEffect(() => {
    if (product.product.length !== 0) {
      const RandomNumber = new Set();
      while (RandomNumber.size < 4) {
        RandomNumber.add(Math.floor(Math.random() * 100));
      }
      const productArr = [...RandomNumber].map((el) => {
        return product.product[el];
      });
      setMainList(productArr);
    }
  }, [product]);

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

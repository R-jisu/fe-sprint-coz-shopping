import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Styled from "../style/main.style";
import ProductInstance from "./ProductInstance";

const BookmarkList = () => {
  const [mainList, setMainList] = useState(null);
  const product = useSelector((state) => state.product.bookmarked);
  useEffect(() => {
    setMainList(product.slice(0, 4));
  }, [product]);

  return (
    <>
      <Styled.ListFont>북마크 리스트</Styled.ListFont>
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

export default BookmarkList;

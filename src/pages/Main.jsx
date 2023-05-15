import ProductList from "../components/ProductList";
import * as Styled from "../style/main.style";

const Main = () => {
  return (
    <div className="my-[1.5rem]">
      <ProductList />
      <div>
        <Styled.ListFont>북마크 리스트</Styled.ListFont>
        <Styled.ListUL className="flex gap-5">
          {/* //Todo 북마크 추가 */}
        </Styled.ListUL>
      </div>
    </div>
  );
};

export default Main;

import { Card } from "../ui/Card";

const ProductBrand = () => {
  return (
    <Card>
      <img src="dd" alt="" />
      <div className="flex justify-between">
        <p>이름</p>
        <p>오른쪽상단</p>
      </div>
      <div className="flex justify-end">
        <p>오른쪽하단</p>
      </div>
    </Card>
  );
};

export default ProductBrand;

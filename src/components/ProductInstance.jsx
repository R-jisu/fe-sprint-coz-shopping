import styled from "styled-components";
import { Card } from "../ui/Card";

const BoldP = styled.p`
  font-weight: 800;
`;

const ProductInstance = ({ info }) => {
  //카테고리일 경우
  const {
    type,
    title,
    brand_name,
    image_url,
    brand_image_url,
    sub_title,
    discountPercentage,
    price,
    follower,
  } = info;
  if (type === "Category") {
    return (
      <Card img={image_url}>
        <BoldP># {title}</BoldP>
      </Card>
    );
  }
  //기획적일 경우
  if (type === "Exhibition") {
    return (
      <Card img={image_url}>
        <BoldP>{title}</BoldP>
        <p>{sub_title}</p>
      </Card>
    );
  }
  //product 나 brand일 경우
  if (type === "Product") {
    return (
      <Card img={image_url}>
        <div className="flex justify-between">
          <BoldP>{title}</BoldP>
          <p>{discountPercentage}</p>
        </div>
        <div className="flex justify-end">
          <p>{price}원</p>
        </div>
      </Card>
    );
  }

  if (type === "Brand") {
    return (
      <Card img={brand_image_url}>
        <div className="flex justify-between">
          <BoldP>{brand_name}</BoldP>
          <BoldP>관심고객수</BoldP>
        </div>
        <div className="flex justify-end">
          <p>{follower}</p>
        </div>
      </Card>
    );
  }
};

export default ProductInstance;

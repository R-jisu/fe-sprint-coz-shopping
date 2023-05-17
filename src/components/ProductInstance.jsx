import styled from "styled-components";
import addCommasToNumber from "../func/addCommasToNum";
import { BoldP } from "../style/main.style";
import { Card } from "../ui/Card";

const ProductInstance = ({ info }) => {
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
    id,
  } = info;

  if (type === "Category") {
    return (
      <Card img={image_url} id={id} title={title}>
        <BoldP># {title}</BoldP>
      </Card>
    );
  }
  if (type === "Exhibition") {
    return (
      <Card img={image_url} id={id} title={title}>
        <BoldP>{title}</BoldP>
        <p>{sub_title}</p>
      </Card>
    );
  }
  if (type === "Product") {
    return (
      <Card img={image_url} id={id} title={title}>
        <div className="flex justify-between">
          <BoldP>{title}</BoldP>
          <BoldP className="text-[#452CDD]">{discountPercentage}%</BoldP>
        </div>
        <div className="flex justify-end">
          <p>{addCommasToNumber(price)}원</p>
        </div>
      </Card>
    );
  }
  if (type === "Brand") {
    return (
      <Card img={brand_image_url} id={id} title={brand_name}>
        <div className="flex justify-between">
          <BoldP>{brand_name}</BoldP>
          <BoldP>관심고객수</BoldP>
        </div>
        <div className="flex justify-end">
          <p>{addCommasToNumber(follower)}명</p>
        </div>
      </Card>
    );
  }
};

export default ProductInstance;

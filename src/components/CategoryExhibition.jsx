import React from "react";
import { Card } from "../ui/Card";

const CategoryExhibition = ({ name, description }) => {
  //카테고리일 경우
  if (!description) {
    return (
      <Card>
        <p>{name}</p>
      </Card>
    );
  }
  //기획적일 경우
  if (description) {
    return (
      <Card>
        <p>{name}</p>
        {description && <p>{description}</p>}
      </Card>
    );
  }
};

export default CategoryExhibition;

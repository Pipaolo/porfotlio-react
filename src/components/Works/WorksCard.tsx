import React from "react";

interface IProps {
  description: string;
  image: string;
}

export default function WorksCard({ description, image }: IProps) {
  return (
    <div
      className="works-card"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="works-card-image-wrapper">
        <img src={require(`../../images/${image}`)} alt="" />
      </div>
      <div className="works-card-content">{description}</div>
    </div>
  );
}

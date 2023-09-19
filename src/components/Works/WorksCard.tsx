import React from "react";

interface IProps {
  description: string;
  image: string;
  title: string;
  delay: number;
}

export default function WorksCard({
  description,
  image,
  title,
  ...props
}: IProps) {
  return (
    <div
      className="works-card"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay={props.delay}
    >
      <div className="works-card-overlay">
        <h4>{title}</h4>
      </div>
      <div className="works-card-image-wrapper">
        <img src={require(`../../images/${image}`)} alt="" />
      </div>
      <div className="works-card-content">{description}</div>
    </div>
  );
}

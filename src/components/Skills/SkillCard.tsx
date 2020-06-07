import React from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  image: string;
  text: string;
  skills: Array<string>;
}

export default function SkillCard({ image, text, skills }: IProps) {
  return (
    <li className="skill-card" data-aos="zoom-in">
      <ReactSVG src={require(`../../images/${image}.svg`)} />
      <div className="skill-card-content">
        <div className="skill-title">{text}</div>
        <div className="skill-wrapper">
          {skills.map((skill) => (
            <span key={skill} className="skill-name">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}

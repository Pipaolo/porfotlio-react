import React, { Component } from "react";
import "./Skills.css";
import { Element } from "react-scroll";
import SkillCard from "./SkillCard";

interface IProps {
  id: string;
}

interface IState {}

export default class Skills extends Component<IProps, IState> {
  render() {
    return (
      <Element name="skills" id={this.props.id} className="skills">
        <div className="skill-watermark">My Skills</div>
        <div className="skills-header">My Skills</div>
        <div className="skill-card-wrapper">
          <SkillCard
            image="code"
            text="Web Development"
            skills={["HTML", "CSS3", "JavaScript"]}
          />
          <SkillCard
            image="gear"
            text="Backend Framework"
            skills={["Firebase", "MongoDB"]}
          />
          <SkillCard
            image="app"
            text="App Development"
            skills={["Dart", "Kotlin"]}
          />
        </div>
      </Element>
    );
  }
}

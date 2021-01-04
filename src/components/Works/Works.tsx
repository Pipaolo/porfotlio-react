import React, { Component } from "react";
import "./Works.css";
import "./WorksCard.css";
import { Element } from "react-scroll";
import WorksCard from "./WorksCard";

interface IProps {
  id: string;
}
interface IState {}

export default class Works extends Component<IProps, IState> {
  render() {
    return (
      <Element id={this.props.id} name="works" className="works">
        <div className="works-header-wrapper">
          <div className="works-header">Works</div>
          <div className="works-wrapper"></div>
        </div>
        <div className="works-cards-wrapper">
          <WorksCard
            image={`ccfii.jpg`}
            description="A registration app that uses the Google Sheets as a database."
          />
          <WorksCard
            image={`reclip.png`}
            description="A Multimedia platform that showcases the works of CIIT Senior Highschool Students."
          />
          <WorksCard
            image={`tracker.png`}
            description="A Realtime Covid Tracker in the Philippines."
          />    
          <WorksCard
          image={`work_immersion.png`}
          description="A realtime coaching tracker for students and teachers for scheduling and keeping track of coaching sessions."
        />
        </div>
      </Element>
    );
  }
}

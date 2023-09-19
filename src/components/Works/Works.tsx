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
            delay={100}
            image={`ccfii.jpg`}
            title="CCFII Registration App"
            description="A registration app that uses the Google Sheets as a database."
          />
          <WorksCard
            delay={200}
            title="Reclip"
            image={`reclip.png`}
            description="A Multimedia platform that showcases the works of CIIT Senior Highschool Students."
          />
          <WorksCard
            delay={300}
            title="Covid Tracker"
            image={`tracker.png`}
            description="A Realtime Covid Tracker in the Philippines."
          />
          <WorksCard
            delay={400}
            title="Realtime Coaching Tracker"
            image={`work_immersion.png`}
            description="A realtime coaching tracker for students and teachers for scheduling and keeping track of coaching sessions."
          />
          <WorksCard
            delay={500}
            title="Course Explorer"
            image={`course_explorer.png`}
            description="A web application that provides a recommendations engine for students to find courses that they might be interested in."
          />
          <WorksCard
            delay={600}
            title="Machine Learning Works"
            image={`machine_learning.png`}
            description="A web application that contains the compilation of machine learning activites and projects."
          />
          <WorksCard
            delay={700}
            title="Pomo Pomo - Pomodoro Timer"
            image={`pomo_pomo.png`}
            description="A stylistic and minimalist pomodoro timer. "
          />
          <WorksCard
            delay={800}
            title="Chatbox - Realtime Chat Room"
            image={`chatbox.png`}
            description="A realtime chat room service that allows different users to communicate in a single room."
          />
          <WorksCard
            delay={900}
            title="POS System"
            image={`pos_system.png`}
            description="A POS System made for small restaurants/eateries"
          />
        </div>
      </Element>
    );
  }
}

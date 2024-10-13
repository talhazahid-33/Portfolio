import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import About from "./About/About";
import ContactMe from "./ContactMe/contact";
import StartSection from "./Start/Start";
import Projects from "./Projects/projects";

const TimeLine = () => {
  return (
    <VerticalTimeline layout="1-column-left" lineColor = "black">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        icon={<IoIosPerson />}
        contentStyle={{ background: "rgb(20, 18, 28, 1)" }}
        iconStyle={{ background: "rgb(33, 150, 243)" }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(64, 10, 213, 1)' }}
      >
        <StartSection />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(20, 18, 28, 1)" }}
        iconStyle={{ background: "rgb(33, 150, 243)" }}
        icon={<MdWork />}
      >
        <About />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "rgb(20, 18, 28, 1)" }}
        icon={<BsPersonWorkspace/>}
      >
        <Projects />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "rgb(20, 18, 28, 1)" }}
        icon={<MdContactPhone/>}
      >
        <ContactMe />
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLine;

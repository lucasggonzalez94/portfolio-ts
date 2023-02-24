import './Portfolio.scss';

import Background from "components/Background/Background";
import { AboutMe } from "pages/AboutMe/AboutMe";
import Projects from "pages/Projects/Projects";
import Banner from "pages/Banner/Banner";
import FormEmail from "pages/FormEmail/FormEmail";
import SkillList from "pages/SkillList/SkillList";

export const Portfolio = () => {
  return (
    <>
      <Background/>
      <Banner />
      <div className="about-me">
        <AboutMe/>
        <SkillList/>
      </div>
      <Projects/>
      <FormEmail/>
    </>
  );
};

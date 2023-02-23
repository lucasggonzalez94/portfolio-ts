import Background from "components/Background/Background";
import { AboutMe } from "pages/AboutMe/AboutMe";
import Projects from "pages/Projects/Projects";
import Banner from "pages/Banner/Banner";
import FormEmail from "pages/FormEmail/FormEmail";

export const Portfolio = () => {
  return (
    <>
      <Background/>
      <Banner />
      <AboutMe/>
      <Projects/>
      <FormEmail/>
    </>
  );
};

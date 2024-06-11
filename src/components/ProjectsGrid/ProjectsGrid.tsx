import './ProjectsGrid.scss';

import projects from "static/data/projects.json";

import ProjectCard from "components/ProjectCard/ProjectCard";

const ProjectsGrid = () => {

  return (
    <div className="grid-projects">
      {projects.projects.map((item) => (
        <ProjectCard
          key={item.id}
          img={require(`../../static/img/${item.img}`)}
          title={item.title}
          description={item.description}
          gitUrl={item.gitUrl}
          siteUrl={item.siteUrl}
          skills={item.skills}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;

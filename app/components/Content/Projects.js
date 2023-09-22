import { projectList } from '@/app/data/mockProjects';
import { ProjectsContainer } from './projectsElements';
import { BsArrowUpRight } from 'react-icons/bs';

export const Projects = () => {
  return (
    <ProjectsContainer>
      <section>
        {projectList.map((project) => (
          <div>
            <a href={project.url} target="_blank">
              <h2>{project.name}</h2>
              <BsArrowUpRight />
            </a>

            <p>- {project.description}</p>
          </div>
        ))}
      </section>
    </ProjectsContainer>
  );
};

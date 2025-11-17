import { Wrapper, ProjectCard, SecHeading } from "../components";
import projectData from '../data/projects.js';
import paddings from "../styles/paddingProgression.js";

const Projects = () => {
  return (
    <section id="projects">
      <Wrapper classes={`flex flex-col items-center gap-y-10 ${paddings.secheight}`}>
        <SecHeading title = {'Projects'} />
        {/* <p className="text-2xl">Tools and technologies I use to bring ideas to life.</p> */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projectData.map((project, index) => {
            return <ProjectCard key={index} project={project} />
          })}
        </div>
      </Wrapper>
    </section>
  )
}

export default Projects
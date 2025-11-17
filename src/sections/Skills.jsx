import { Wrapper, SkillCard, SecHeading } from '../components'
import skillsData from '../data/skills.jsx';
import paddings from '../styles/paddingProgression.js';

const Skills = () => {
  return (
    <section id="skills">
      <Wrapper classes={`flex flex-col items-center gap-y-8 ${paddings.secheight}`}>
        <SecHeading title = {'Skills'}/>
        <p className="text-2xl">Technologies I work with.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {skillsData.map((category, index) => {
            return <SkillCard key={index} category={category} />
          })}
        </div>
      </Wrapper>
    </section>
  )
}

export default Skills
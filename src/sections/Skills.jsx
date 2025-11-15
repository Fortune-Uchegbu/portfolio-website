import { Wrapper, SkillCard } from '../components'
import skillsData from '../data/skills.jsx';

const Skills = () => {
  return (
    <section id="skills">
      <Wrapper classes={`flex flex-col items-center gap-y-8 py-3`}>
        <h2 className='text-4xl font-semibold'>Skills</h2>
        <p className="text-2xl">Tools and technologies I use to bring ideas to life.</p>
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
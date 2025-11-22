import {Wrapper, SecHeading} from '../components';
import paddings  from '../styles/paddingProgression.js';
import ProfileImg from "../assets/images/fortune-headshot.jpg";

const About = ({width}) => {
  return (
    <section id="about">
      <Wrapper classes={`flex flex-col text-medium lg:text-xl items-center gap-y-10 ${paddings.secheight}`}>
        <SecHeading title ={'About'} />
        <div className={width < 1024 ? 'flex flex-col items-center' : ''}>
          <img className='lg:float-left w-[400px] aspect-auto rounded-full lg:mr-12 mb-12 ' src={ProfileImg} alt="Profile-Headshot" /> 
          <p className="text-start mb-8 aboutMe">
            I’m Fortune Uchegbu, a frontend developer with a foundation in Electrical and Electronics Engineering and a growing focus on modern web technologies. I build responsive, user-focused interfaces and enjoy turning ideas into clear, functional experiences using JavaScript, React, and clean UI structures.
          </p>
          <p className="text-start mb-8 whatIDo">
            I specialize in bringing designs to life through accessible layouts, intuitive interactivity, and smooth user flows. My strengths include modular JavaScript, dynamic state management and building components that stay consistent, maintainable, and easy to extend. I pay close attention to responsiveness, clarity and clean code architecture.
          </p>
          <p className="text-start mb-8 whatI'mOnCurrenlty">
            I’m currently deepening my React skills—working with custom hooks, routing, component patterns, and cleaner state logic—while also preparing for the next stages of my growth. I’m gradually moving into TypeScript, Next.js, and stronger problem-solving through data structures and algorithms. My long-term roadmap includes transitioning into backend technologies so I can operate confidently as a full-stack developer and continue expanding beyond that as I grow in the field.
          </p>
          <p className="text-start mb-8 whyIBuild">
            I enjoy solving problems and creating experiences that feel smooth and deliberate. My engineering background gives me a structured approach to breaking down challenges and Web development lets me combine that structure with creativity. Watching an idea evolve into something functional and polished is what drives my work.
          </p>
          <p className="text-start mb-8 whatI'mLookingFor">
            I’m open to junior developer roles, internships, and collaboration opportunities where I can contribute to real projects, learn from experienced teams, and continue growing my skills in modern Web development. My goal is to keep building, improving, and gaining practical experience that sharpens both my technical and problem-solving abilities.
          </p>
        </div>
      </Wrapper>
    </section>
  )
}

export default About
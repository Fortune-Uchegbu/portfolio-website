import { paddings } from "../../styles";
import { Wrapper } from "../../components";

const MainHero = ({ navHeight }) => {
  return (
    <section 
    className= {`w-full`}
    style={{height: `calc(100vh - ${navHeight}px)`}}
    >
      <Wrapper 
      classes = {`flex flex-col h-full justify-center items-center ${paddings.width}`}
      comp = {
        <h1 className="text-4xl sm:text-6xl font-bold max-w-2xl">
        I build clean, functional and fast web experiences.
        </h1>
      }
      />
    </section>
  )
}

export default MainHero;
import { paddings } from "../../styles";

const MainHero = ({ navHeight }) => {
  return (
    <section 
    className= {`flex flex-col w-full justify-center items-center ${paddings.width}`}
    style={{height: `calc(100vh - ${navHeight}px)`}}
    >
        <h1 className="text-4xl sm:text-6xl font-bold max-w-2xl">
            I build clean, functional and fast web experiences.
        </h1>
    </section>
  )
}

export default MainHero
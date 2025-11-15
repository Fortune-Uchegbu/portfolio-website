import { Wrapper, CTAButton } from "../../components";

const MainHero = ({ navHeight }) => {
  const handleCTA = ({ id }) => {
    console.log(id)
  }

  return (
    <section 
    className= "w-full"
    style={{height: `calc(100vh - ${navHeight}px)`}}
    >
      <Wrapper 
      classes = {`flex flex-col h-full justify-center items-center gap-y-8`}>
        <h1 className="text-4xl sm:text-6xl font-bold max-w-xl text-center">
        I craft thoughtful, responsive, and efficient web interfaces — turning ideas into practical realities.
        </h1>

        <div className="w-full flex gap-x-2 mainhero-cta justify-center">
          <CTAButton 
          call = {'See My Projects'}
          action = {() => handleCTA('#Projects')}
          />
          <CTAButton 
          call = {'Contact Me'}
          action = {() => handleCTA('#Contact')}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default MainHero;
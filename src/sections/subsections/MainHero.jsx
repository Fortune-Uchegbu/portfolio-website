import { Wrapper, CTAButton } from "../../components";

const MainHero = ({ navHeight }) => {
  const handleCTA = ({ id }) => {
    console.log(id)
  }

  return (
    <section 
    className= "w-full">
      <Wrapper 
      classes = {` h-screen flex flex-col h-full justify-center items-center gap-y-8 relative left-0 text-center px-4`}
      style={{
        paddingTop: `${navHeight}px`
      }}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-xl lg:max-w-2xl text-center">
        I craft thoughtful, responsive, and efficient web interfaces — turning ideas into practical realities.
        </h1>

        <div className="w-full flex gap-x-4 mainhero-cta justify-center">
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
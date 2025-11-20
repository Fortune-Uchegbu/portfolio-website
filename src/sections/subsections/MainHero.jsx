import { Wrapper, CTAButton } from "../../components";

const MainHero = ({ navHeight, width }) => {

  const handleLinkTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section 
    className= "w-full">
      <Wrapper 
      classes = {` h-screen flex flex-col h-full justify-center items-center gap-y-10 relative left-0 text-center px-4`}
      style={{
        paddingTop: `${navHeight}px`
      }}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-xl lg:max-w-2xl text-center">
        I craft thoughtful, responsive, and efficient web interfaces — turning ideas into practical realities.
        </h1>

        <div className={`grid mainhero-cta place-items-center ${width < 640 ? ' grid-cols-1 grid-rows-2 gap-y-3 w-full' : ' grid-cols-2 grid-rows-1 gap-x-4 w-[60%]' }`}>
          <CTAButton 
          classes = {'place-self-end'}
          width={width}
          call = {'See My Projects'}
          action = {(e) => handleLinkTo(e, '#projects')}
          />
          <CTAButton 
          classes = {'place-self-start'}
          width={width}
          call = {'Contact Me'}
          action = {(e) => handleLinkTo(e, '#contact')}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default MainHero;
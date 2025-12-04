import { LinkItems,  CTAButton, CloseMenu, Socials } from "../../components";

const MobileMenu = ({ isOpen, setOpen, width, handleSocial }) => {
  return (
    <section id="mobileMenu" 
    className = {`p-4 flex flex-col gap-y-6 z-50 w-4/5 h-screen fixed bg-pri-light text-sec-light dark:bg-pri-dark dark:text-sec-dark right-0 transition-transform duration-300 ease-in-out shadow-md font-semibold ${isOpen ?
      'translate-x-0' :
      'translate-x-full' 
    }`}>

      <CloseMenu setOpen = {setOpen} />

      <LinkItems width ={width} setOpen={setOpen} />

      <div className="flex flex-col items-center gap-y-5">
        <Socials handleSocial = {handleSocial} />
        <a href="docs/fortune-resume.pdf" download>
          <CTAButton 
          classOne = {'text-lg'}
          classTwo={'text-sec-dark bg-accent-light dark:bg-accent-dark hover:brightness-120 active:brightness-120'}
          call = {'Download Resume'}/>
        </a>
      </div>
      
    </section>
  )
}

export default MobileMenu;
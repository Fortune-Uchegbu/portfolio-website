import { LinkItems, SocialLinks, DownloadResume, CloseMenu } from "../components";

const MobileMenu = ({ isOpen, setOpen }) => {
  return (
    <section id="mobileMenu" className={`p-4 flex flex-col gap-y-5 z-20 w-4/5 h-screen fixed bg-pri-light text-sec-light dark:bg-pri-dark dark:text-sec-dark right-0 transition-transform duration-300 ease-in-out shadow-md font-semibold ${isOpen ?
      'translate-x-0' :
      'translate-x-full' 
    }`}>
      <CloseMenu setOpen = {setOpen} />
      <LinkItems />
      <div className="flex justify-center">
        <SocialLinks />
        <DownloadResume />
      </div>
    </section>
  )
}

export default MobileMenu;
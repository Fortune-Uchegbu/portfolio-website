
const MobileMenu = ({ isOpen }) => {
  return (
    <section id="mobileMenu" className={`w-4/5 h-screen fixed bg-pri-light text-sec-light dark:bg-pri-dark dark:text-sec-dark right-0 transition-transform duration-300 ease-in-out shadow-md ${isOpen ?
      'translate-x-0' :
      'translate-x-full' 
    }`}></section>
  )
}

export default MobileMenu;
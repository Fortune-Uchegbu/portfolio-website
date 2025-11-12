import {ThemeToggle, NameLogo, LinkItems, CTAButton, Socials, MenuButton, Wrapper} from '../../components';
import { useComponentDimensions } from '../../customhooks';
import { useEffect } from 'react';
import { paddings } from "../../styles";



const Navbar = ({ width, setOpen, handleResumeDownload, handleSocial, setHeight }) => {

  const {ref, dimensions} = useComponentDimensions();

  useEffect(() => {
    setHeight(dimensions.height);
  }, [dimensions.height, setHeight])

  return (
    <nav 
    ref={ref}
    className={`w-full `}
    >
      <Wrapper 
      classes = {`flex items-center justify-between ${paddings.width} ${paddings.navheight}`}
      comp = {
        <>
        <NameLogo />
        {width >= 1024 ? <LinkItems /> : null}
        <div className="flex justify-between items-center gap-x-2 sm:gap-x-4">
          {width < 1024 ?  null : <Socials handleSocial = {handleSocial} />}
          <ThemeToggle />
          {width < 1024 ? <MenuButton setOpen ={setOpen} /> : null}
          {width >= 1024 ? 
          <CTAButton call = {'Download Resume'} action ={handleResumeDownload} /> : 
          null}
        </div>
        </>
      }
      />
    </nav>
  )
}

export default Navbar;
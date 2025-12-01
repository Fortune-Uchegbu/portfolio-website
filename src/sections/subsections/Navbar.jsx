import {ThemeToggle, NameLogo, LinkItems, CTAButton, Socials, MenuButton, Wrapper} from '../../components';
import { useComponentDimensions } from '../../customhooks';
import { useEffect } from 'react';
import { paddings } from "../../styles";


const Navbar = ({ width, setOpen, handleSocial, setHeight }) => {

  const {ref, dimensions} = useComponentDimensions();

  useEffect(() => {
    setHeight(dimensions.height);
  }, [dimensions.height, setHeight])

  return (
    <nav 
    ref={ref}
    className={`w-full shadow-sm bg-pri-light dark:bg-pri-dark shadow-sec-light dark:shadow-sec-dark fixed z-20 top-0 left-0`}
    >
      <Wrapper 
      classes = {`flex items-center justify-between ${paddings.navheight}`}>
        <NameLogo />
        {width >= 1024 ? <LinkItems /> : null}
        <div className="flex justify-between items-center gap-x-2">
          {width < 1024 ?  null : <Socials handleSocial = {handleSocial} />}
          <ThemeToggle />
          {width < 1024 ? <MenuButton setOpen ={setOpen} /> : null}
          {width >= 1024 ? 
          <a href="/docs/fortune-resume.pdf" download><CTAButton call = {'Download Resume'}/></a> : null}
        </div>
      </Wrapper>
    </nav>
  )
}

export default Navbar;
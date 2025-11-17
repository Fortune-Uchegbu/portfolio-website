import {SecHeading, Wrapper} from '../components';
import  paddings  from '../styles/paddingProgression';

const Contact = () => {
  return (
    <section id="contact" className=''>
      <Wrapper classes = {`text-center flex flex-col items-center ${paddings.secheight}`}>
        <SecHeading title={'Contact'} />
        <p className="text-2xl">Open to job and internship opportunities. I’m also happy to collaborate on ideas or projects.</p>
      </Wrapper>
    </section>
  )
}

export default Contact
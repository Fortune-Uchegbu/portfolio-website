import {SecHeading, Wrapper} from '../components';
import  paddings  from '../styles/paddingProgression';
import { ContactForm } from './subsections';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('mailsent!')
    emailjs.sendForm(
      'service_27e1bla',
      'template_6732ocn',
      formRef.current,
      'cnjrkzfsDq2QvAgqa'
    ).then(() => {
      console.log('Email sent successfully');
      formRef.current.reset();
    }).catch((error) => {
      console.error('Failed:', error);
    });
  }
  return (
    <section id="contact" className=''>
      <Wrapper classes = {`text-center flex flex-col items-center ${paddings.secheight} gap-y-10`}>
        <SecHeading title={'Contact'} />
        <p className="text-xl">Open to job and internship opportunities. I’m also happy to collaborate on ideas or projects. Feel free to reach out to me here.</p>
        <ContactForm 
        formRef = {formRef}
        handleSubmit={handleSubmit}/>
      </Wrapper>
    </section>
  )
}

export default Contact
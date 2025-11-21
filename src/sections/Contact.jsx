import {SecHeading, Wrapper} from '../components';
import  paddings  from '../styles/paddingProgression';
import { ContactForm } from './subsections';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactData from '../data/contactData.jsx';

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
    <section id="contact" className='bg-pri-dark text-sec-dark dark:bg-pri-dark dark:text-sec-dark'>
      <Wrapper classes = {`text-center flex flex-col items-center ${paddings.secheight} gap-y-10`}>

        <SecHeading title={'Contact'} />

        <p className="text-xl">Open to exploring new roles and collaborations! I'm genuinely excited about opportunities for learning, growth, and contributing to innovative projects. Happy to connect and discuss ideas – feel free to reach out to me here.</p>

        <section className="w-full flex flex-col md:flex-row md:gap-x-10 gap-y-8">
          {/* contact card */}
          <ul className=" space-y-3 md:pt-7 px-2 grow">
            {contactData.map((data, index) => (
              <li key={index} className="hover:cursor-pointer text-xl flex gap-x-1 items-center w-full">
                {data.icon}
                <a href= {data.link}  target="_blank" rel="noreferrer">{data.name}</a>
              </li>
            ))}
          </ul>

          <ContactForm 
          formRef = {formRef}
          handleSubmit={handleSubmit}/>
        </section>
        
      </Wrapper>
    </section>
  )
}

export default Contact
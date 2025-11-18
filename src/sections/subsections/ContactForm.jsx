import React from 'react'

const ContactForm = ({ formRef, handleSubmit }) => {
  return (
    <form 
    ref={formRef}
    id="contact-form" 
    className = 'flex flex-col w-full items-start gap-y-3 text-xl placeholder:text-sec-light dark:placeholder:text-sec-dark'
    onSubmit={handleSubmit}>
        <input className='' type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="title" placeholder="Title" />
        <textarea name="message" placeholder="Message" required></textarea>
        <button className='font-semibold px-6 py-2' type="submit">Send</button>
    </form>

  )
}

export default ContactForm
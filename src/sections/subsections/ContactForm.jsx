import React from 'react'

const ContactForm = ({ formRef, handleSubmit }) => {
  return (
    <form 
    ref={formRef}
    id="contact-form" 
    className = 'flex flex-col w-full items-start gap-y-3 text-xl placeholder:text-sec-light dark:placeholder:text-sec-dark'
    onSubmit={handleSubmit}>
        <span className='flex flex-col gap-y-1'>
          <label className='w-fit' htmlFor="#name">Name:</label>
          <input id='name' className='bg-sec-dark text-pri-dark p-1 rounded-md' type="text" name="name" placeholder="Your Name" required />
        </span>
        <span className='flex flex-col gap-y-1'>
          <label className='w-fit' htmlFor="#email">Email:</label>
          <input id='email' className='bg-sec-dark text-pri-dark p-1 rounded-md' type="email" name="email" placeholder="Your Mail" required />
        </span>
        <span className='flex flex-col gap-y-1'>
          <label className='w-fit' htmlFor="#title">Title:</label>
          <input id='title' className='bg-sec-dark text-pri-dark p-1 rounded-md' type="text" name="title" placeholder="Title" />
        </span>
        <span className='flex flex-col gap-y-1'>
          <label className='w-fit' htmlFor="#message">Message:</label>
          <textarea id='message' className='bg-sec-dark text-pri-dark p-1 rounded-md' name="message" placeholder="Message" required></textarea>
        </span>
        <button className='font-semibold px-6 py-2' type="submit">Send</button>
    </form>

  )
}

export default ContactForm
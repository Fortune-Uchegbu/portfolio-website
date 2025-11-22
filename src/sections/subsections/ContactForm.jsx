import React from 'react'

const ContactForm = ({ formRef, handleSubmit }) => {
  return (
    <form 
    className='grow'
    ref={formRef}
    id="contact-form" 
    onSubmit={handleSubmit}>
      <fieldset className='flex flex-col md:justify-center min-w-full items-start gap-y-3 text-xl text-start'>
        <legend className='mb-3 min-w-full'>You can also send me a direct mail below:</legend>
        <span className='flex flex-col gap-y-1'>
          <label className='w-fit px-1' htmlFor="name">Name:</label>
          <input id='name' className=' bg-sec-dark text-pri-dark px-2 py-1 rounded-md placeholder:text-sec-light' type="text" autoComplete='on' name="name" placeholder="Your Name" required />
        </span>
        <span className='flex flex-col gap-y-1'>
          <label className='w-fit px-1' htmlFor="email">Email:</label>
          <input id='email' className='bg-sec-dark text-pri-dark px-2 py-1 rounded-md  placeholder:text-sec-light' type="email" autoComplete='on' name="email" placeholder="Your Mail" required />
        </span>
        <span className='flex flex-col gap-y-1'>
          <label className='w-fit px-1' htmlFor="title">Title:</label>
          <input id='title' className='bg-sec-dark text-pri-dark px-2 py-1 rounded-md  placeholder:text-sec-light' type="text" name="title" placeholder="Title" />
        </span>
        <span className='flex flex-col gap-y-1'>
          <label className='w-fit px-1' htmlFor="message">Message:</label>
          <textarea id='message' className='bg-sec-dark text-pri-dark px-2 py-1 rounded-md  placeholder:text-sec-light' name="message" placeholder="Message" required></textarea>
        </span>
        <button className='font-medium px-4 py-2 bg-accent rounded-xl dark:text-sec-dark' type="submit">Send</button>
      </fieldset>
    </form>

  )
}

export default ContactForm
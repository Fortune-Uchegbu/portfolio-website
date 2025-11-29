import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <article className=' border border-neutral-dark dark:border-neutral-light rounded-xl overflow-hidden shadow-md hover:shadow-2xl dark:hover:shadow-lg transition-all duration-300 dark:hover:shadow-accent-dark hover:scale-[1.005] ease-in-out'>
      <img 
      className='w-full'
      src={project.image} alt={`${project.title} image`} />
      <section className="p-6 flex flex-col justify-between gap-y-3">
        <h3 className="font-medium my-2 text-2xl ">{project.title}</h3>
        <a>{project.description}</a>
        <p>
          <span className='font-semibold'>Stack: </span>
          {project.stack.join(', ')}
          </p>
        <ul className='flex flex-col gap-y-1.5'>
          {Object.entries(project.links).map(([key, value]) => (
            <li key={key} className='min-w-full'>
              <span className='font-semibold'> {`${key}: `}</span>
              <a className='hover:underline active:underline underline-offset-2' href={value} target="_blank" rel="noopener noreferrer">
                {value}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default ProjectCard;
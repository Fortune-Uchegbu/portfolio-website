import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <article className='p-6 border border-neutral-dark dark:border-neutral-light rounded-xl shadow-md'>
      <img 
      className='w-full rounded-xl'
      src={project.image} alt={`${project.title} image`} />
      <div className="py-6 flex flex-col justify-between">
        <h3 className="font-medium my-4 text-2xl ">{project.title}</h3>
        <a>{project.description}</a>
        <p>{`Stack: ${project.stack}`}</p>
        <ul>
          {Object.entries(project.links).map(([key, value]) => (
            <li key={key} className='min-w-full'>
              <span className='font-semibold'>{`${key}: `}</span>
              <a href={value} target="_blank" rel="noopener noreferrer">
                {value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ProjectCard;
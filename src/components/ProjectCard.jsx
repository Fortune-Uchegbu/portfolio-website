import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <article className='p-6 border border-neutral-dark dark:border-neutral-light rounded-xl shadow-md'>
      <img 
      className='w-16 h-16'
      src={project.image} alt={`${project.title} image`} />
      <div className="py-6 flex flex-col justify-between">
        <h3 className="font-medium my-4 text-2xl ">{project.title}</h3>
        <p className="">{project.description}</p>
        <p className="">{`Stack: ${project.stack}`}</p>
        <ul className=''>
          {Object.entries(project.links).forEach(([key, value]) => {
            return <li className='min-w-full'>
            {`${key}: ${value}`}
            </li>
          })}
        </ul>
      </div>
    </article>
  )
}

export default ProjectCard;
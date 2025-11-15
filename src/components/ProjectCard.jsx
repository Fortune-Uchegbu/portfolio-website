import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <article className='rounded-xl shadow-md'>
      <img 
      className='w-16 h-16'
      src={project.image} alt={`${project.title} image`} />
      <div className="p-6">
        <h2 className="font-semibold text-2xl">{project.title}</h2>
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
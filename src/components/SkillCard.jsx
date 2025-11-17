import React from 'react'

const SkillCard = ({ category }) => {
  return (
    <div className='p-6 border border-sec-light dark:border-sec-dark rounded-xl shadow-md'>
      <h3 className="text-2xl font-medium mb-6">{category.category}</h3>
      <ul className="">
        {category.items.map((item, index) => {
          return <li key={index} className="min-w-full text-lg mt-2 flex gap-x-2 items-baseline">
            {item.icon}
            <span className='flex-1 break-normal'>{item.name}</span>
          </li>
        })}
      </ul>
    </div>
  )
}

export default SkillCard;
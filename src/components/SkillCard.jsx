import React from 'react'

const SkillCard = ({ category }) => {
  return (
    <div className='p-6 rounded-xl shadow-md'>
      <h2 className="text-2xl font-semibold">{category.category}</h2>
      <ul className="">
        {category.items.map((item, index) => {
          return <li key={index} className="text-lg mt-2 min-w-max flex gap-x-2 items-center">
            {item.icon}
            <span>{item.name}</span>
          </li>
        })}
      </ul>
    </div>
  )
}

export default SkillCard;
import React from 'react'

const SkillCard = ({ category }) => {
  return (
    <div className='p-6 rounded-xl shadow-sm '>
      <h2 className="text-2xl font-semibold">{category.category}</h2>
      <ul className="">
        {category.items.map((item, index) => {
          return <li key={index} className="text-lg mt-2">{item.name}</li>
        })}
      </ul>
    </div>
  )
}

export default SkillCard;
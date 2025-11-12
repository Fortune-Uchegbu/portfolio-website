import React from 'react'

const Wrapper = ({ component }) => {
  return (
    <div className='w-full max-w-7xl'>
        {component}
    </div>
  )
}

export default Wrapper
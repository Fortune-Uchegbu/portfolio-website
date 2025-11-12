import React from 'react'

const Wrapper = ({ classes, comp }) => {
  return (
    <section className= {`w-full max-w-[1440px] place-self-center ${classes}`}>
        {comp}
    </section>
  )
}

export default Wrapper
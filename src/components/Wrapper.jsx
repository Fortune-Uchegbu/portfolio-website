import React from 'react'

const Wrapper = ({ classes, children }) => {
  return (
    <section className= {`w-full max-w-[1440px] mx-auto ${classes}`}>
      {children}
    </section>
  )
}

export default Wrapper
import { paddings } from "../styles";

const Wrapper = ({ classes, children }) => {
  return (
    <section className= {`w-full max-w-[1440px] mx-auto ${paddings.width} ${classes}`}>
      {children}
    </section>
  )
}

export default Wrapper
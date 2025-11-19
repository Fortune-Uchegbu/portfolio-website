import { paddings } from "../styles";

const Wrapper = ({ classes, children, ...props }) => {
  return (
    <section className= {`w-full h-auto max-w-[1440px] mx-auto ${paddings.width} ${classes}`} {...props}>
      {children}
    </section>
  )
}

export default Wrapper


const Overlay = ({ isOpen }) => {
  return (
    <div 
    className={`fixed inset-0 bg-black opacity-50 z-10 transition-opacity duration-300 ${isOpen ? 'block' : 'hidden'}`}
    ></div>
  )
}

export default Overlay
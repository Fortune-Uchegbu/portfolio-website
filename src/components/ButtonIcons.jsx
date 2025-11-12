
const ButtonIcons = ({handler, icon}) => {
  return (
    <button 
    className="p-3 w-min rounded-full hover:bg-neutral-light hover:cursor-pointer dark:hover:bg-neutral-dark active:bg-neutral-light  dark:active:bg-neutral-dark "
    onClick={handler}>
        {icon}
    </button>
  )
}

export default ButtonIcons
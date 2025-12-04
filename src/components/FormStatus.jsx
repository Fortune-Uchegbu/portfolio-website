import { useEffect, useRef } from "react"

const FormStatus = ({status}) => { 
    const statusRef = useRef(null) 
    useEffect(() => {
        if (statusRef.current && status) {
            const formStatus = statusRef.current;
            formStatus.classList.remove('hidden', 'opacity-0');
            formStatus.classList.add('opacity-100')
            const timeOutId = setTimeout(() => {
                formStatus.classList.remove('opacity-100');
                formStatus.classList.add('hidden', 'opacity-0')
            }, 2000)
            return () =>  {
                clearTimeout(timeOutId);
            }
        }
    }, [status])

    return (
    <div ref={statusRef} className="hidden opacity-0 p-2 lg:p-6 absolute left-1/2 -translate-x-1/2 bottom-0 ">
        {status}
    </div>
    )
}

export default FormStatus
import { useState, useEffect, useRef } from 'react'

const useComponentDimensions = () => {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

  useEffect(() => {
    if (!ref.current) return;
    const elem = ref.current;
    const observer = new ResizeObserver(() => {
      const rect = elem.getBoundingClientRect();
      setDimensions({ height: rect.height, width: rect.width });
    });
    observer.observe(elem);
    return () => {
      observer.disconnect();
    };
  }, [])
  return ({ ref, dimensions });
}

export default useComponentDimensions;
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface CartContainerProps{
  children: ReactNode;
  selector: string;
};

export function CartContainer({ children, selector }: CartContainerProps){
  const [ isMounted, setIsMounted ] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  },[selector]);

  return isMounted ? 
    createPortal(children, document.querySelector(selector) as any)
    : null;
};
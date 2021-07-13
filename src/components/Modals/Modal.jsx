//Libraries
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import bemCssModules from 'bem-css-modules';
//Style
import {default as ModalStyles} from './Modal.module.scss';
const style = bemCssModules(ModalStyles);

const Modal = ({children, handleOnClose, isOpen, shouldBeClosedOnOutsideClick}) => {
  const modalRef = useRef(null);
  const previousActiveElem = useRef(null)

  useEffect(()=>{
    if(!modalRef.current) return;

    const {current:modal} = modalRef;

    if(isOpen){
      previousActiveElem.current = document.activeElement;
      modal.showModal();
    }
    else if(previousActiveElem.current){
      modal.close();
      previousActiveElem.current.focus();
    }
  },[isOpen]);

  useEffect(()=>{
    const { current : modal } = modalRef;
    const handleCancel = e =>{
      e.preventDefault();
      handleOnClose();
    }
    modal.addEventListener('cancel', handleCancel);
    return(() => modal.removeEventListener('cancel', handleCancel))
  },[ handleOnClose ]);

  const handleOutsideClick=({ target })=>{
    const {current} = modalRef;
    if(shouldBeClosedOnOutsideClick && target === current) handleOnClose();
  }

  return ReactDOM.createPortal(( 
    <dialog className={ style() } ref={ modalRef } onClick={ handleOutsideClick }>
      {children} 
    </dialog>
   ),document.body);
}
 
export default Modal;
import bemCssModules from 'bem-css-modules';
import React, { useContext, useEffect, useState } from 'react';
import request from '../../helpers/request';
import { StoreContext } from '../../store/StoreProvider';

import Modal from '../Modals/Modal';

import {default as LoginFormStyles} from './LoginForm.module.scss';
const style = bemCssModules(LoginFormStyles);

const LoginForm = ({handleOnClose,isModalOpen}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [validateMessage, setValidateMessage] = useState('')

  const { setUser } = useContext(StoreContext);

  const handleOnChangeLogin = ({target}) => setLogin(target.value)
  const handleOnChangePassword = ({target}) => setPassword(target.value)

  const handleOnCloseModal = e =>{
    e.preventDefault();
    handleOnClose();
  }

  const handleOnSubmit = async e =>{
    e.preventDefault();
    const {data, status} = await request.post('/users',
    { login, password }
    );

    if(status===200) {
      setUser(data.user);
      resetStateOfInputs();
      handleOnClose();
    } else{
      setValidateMessage(data.message);
    }

  }

  useEffect(()=>{if(isModalOpen) resetStateOfInputs()},[isModalOpen])

  const resetStateOfInputs = ()=>{
    setLogin('')
    setPassword('')
    setValidateMessage('')
  }

  const validateMessageComponent = validateMessage.length
    ? <p className={style('validate-message')}>{validateMessage}</p>
    : null;

  return ( 
    <Modal 
      isOpen={isModalOpen}
      shouldBeClosedOnOutsideClick={true}
      handleOnClose={handleOnClose}
    >
      <form 
        className={style()} 
        method='post'
        onSubmit={handleOnSubmit}
      >
        {validateMessageComponent}
        <div className={style('row')}>
          <label htmlFor="">
            Login
            <input 
              type="text" 
              value={login}
              onChange={handleOnChangeLogin}
            />
          </label>
        </div>
        <div className={style('row')}>
          <label htmlFor="">
            Hasło
            <input 
              type="password" 
              value={password} 
              onChange={handleOnChangePassword}
            />
          </label>
        </div>
        <div className={style('row')}>
          <button type='submit'>Zaloguj</button>
          <button type='button' onClick={handleOnCloseModal}>Anuluj</button>
        </div>
      </form>
    </Modal>
   );
}
 

export default LoginForm;
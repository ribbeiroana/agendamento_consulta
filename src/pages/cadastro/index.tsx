import React from 'react';
import './style.css';
import { FaUser, FaUserCheck, FaHome, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWeightScale } from "react-icons/fa6";

const CadastroForm = () => {
  return (
      <div className='wrapper'>
        <form>
          <h1>REGISTER</h1>
          <div className="input-box">
            <input type="text" placeholder='Nome Completo' required/>
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="email" placeholder='Email' required/>
            <MdEmail className='icon' />
          </div>
          <div className="input-box">
            <input type="text" placeholder='Endereço' required/>
            <FaHome className='icon' />
          </div>
    
          <div className="input-box">
            <input type="tel" placeholder='Telefone' required/>
            <FaPhone className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Idade' required/>
            <FaUserCheck className='icon'/>
          </div>
          <div className="input-box">
            <input type="tel" placeholder='Peso' required/>
            <FaWeightScale className='icon' />
          </div>
          <div className="input-box">
            <input type="tel" placeholder='Senha' required/>
            <FaUser className='icon' />
          </div>
          <button type="submit">REGISTER</button>
        </form>

      </div>
  )
}

export default CadastroForm;
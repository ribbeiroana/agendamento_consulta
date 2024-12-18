import React from 'react';
import './style.scss';
import { FaUser, FaUserCheck, FaHome, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWeightScale } from "react-icons/fa6";

const CadastroForm = () => {
  return (
    <div className='wrapper'>
      <form>
        <h1>Cadastro</h1>
        <div className='container-input'>
          <div className="input-box">
            <input type="text" placeholder='Nome Completo' required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="email" placeholder='Email' required />
            <MdEmail className='icon' />
          </div>
          <div className="input-box">
            <input type="email" placeholder='CPF' required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="text" placeholder='CEP' required />
            <FaHome className='icon' />
          </div>
          <div className="input-box">
            <input type="text" placeholder='Rua' required />
            <FaHome className='icon' />
          </div>
          <div className="input-box">
            <input type="text" placeholder='Cidade' required />
            <FaHome className='icon' />
          </div>
          <div className="input-box">
            <input type="text" placeholder='N°' required />
            <FaHome className='icon' />
          </div>

          <div className="input-box">
            <input type="tel" placeholder='Telefone' required />
            <FaPhone className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Idade' required />
            <FaUserCheck className='icon' />
          </div>
          <div className="input-box">
            <input type="tel" placeholder='Peso' required />
            <FaWeightScale className='icon' />
          </div>

          <div className="input-box">
            <select name="" id="">
              <option value="" disabled></option>
            </select>
          </div>

          <div className="input-box">
            <input type="tel" placeholder='Senha' required />
            <FaUser className='icon' />
          </div>

        </div>
        <button type="submit">REGISTER</button>
      </form>

    </div>
  )
}

export default CadastroForm;
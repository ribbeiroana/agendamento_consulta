import React from 'react';
import CardBig from '../../components/CardBig';
import CardAverage from '../../components/CardAverage';
import CardSmall from '../../components/CardSmall';
import Search from '../../components/Search';
import Menu from '../../components/Menu';
import './style.css';


const PaginaTeste = () => {
  return (
    <div className="container">
      <Menu />
      <div className="container-itens">
        {/* <Search /> */}
        {/* <CardBig /> */}
        {/* <CardAverage /> */}
        {/* <CardSmall /> */}
      </div>
    </div>
  )
}

export default PaginaTeste;
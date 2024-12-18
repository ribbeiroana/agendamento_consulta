'use client'

import React from 'react';
import './style.scss';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  label: string;
  icon: IconDefinition;
  href: string;
}
export const NavItem = ({ label, icon, href }: Props) => {


  return (
    <a href={href} className='itens' >
      <FontAwesomeIcon icon={icon} className='icon' />
      <div className='text'>{label}</div>
    </a>
  );
}
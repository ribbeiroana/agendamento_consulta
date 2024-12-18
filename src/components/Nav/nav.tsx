'use client'

import React, { ReactNode } from 'react';
import './style.scss';
type Props = {
  children: ReactNode,
}
export const Nav = ({ children }: Props) => {


  return (
    <div className="nav">
      {children}
    </div>
  );
}
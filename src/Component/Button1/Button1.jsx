import React from 'react';
import './Button1.css'
import { Icon } from '@iconify/react';

const Button1 = ({ButtonText}) => {
  return (
    <a className='button' href="#">{ButtonText} <span><Icon height={20} icon="ph:arrow-right-bold" /></span></a>
  )
}

export default Button1
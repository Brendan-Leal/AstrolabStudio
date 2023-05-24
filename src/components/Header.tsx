import React from 'react';
import Image from 'next/image';
import style from '../styles/header.module.css';
import logo from '../../public/Astrolab_Studio_Logo_transparent.png';

export default function Header() {
  return (
    <header className={style.header}>
      <Image
        src={logo}
        alt="logo"
        className={style.logo}
      />
      <p>Finding your space online</p>
    </header>
  );
}

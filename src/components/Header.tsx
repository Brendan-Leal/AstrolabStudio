import React from 'react';
import style from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <div>
        <h1>Astrolab Studio</h1>
        <p>Finding your space online</p>
      </div>
      <div className={style.planet}>&#x1FA90;</div>
    </header>
  );
}

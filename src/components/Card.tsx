import React from 'react';
import style from '../styles/card.module.css';

export default function Card({ text }: { text: string }) {
  return (
    <div className={style.card}>
      <p className={style.content}>{text}</p>
    </div>
  );
}

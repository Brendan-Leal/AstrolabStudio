import React from 'react';
import style from '../styles/card.module.css';

export default function Card({ content, count }: { content: string, count: number }) {
  return (
    <div className={style.card}>
      <p className={style.content}>
        <span className={style.countDown}>{count}</span>
        {content}
      </p>
    </div>
  );
}

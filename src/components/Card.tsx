import React from 'react';
import style from '../styles/card.module.css';

export default function Card({ content, count }: { content: string, count: number }) {
  return (
    <div className={style.container}>
      <div className={style.countDown}>{count}</div>
      <div className={style.card}>
        <p className={style.content}>
          {content}
        </p>
      </div>
    </div>
  );
}

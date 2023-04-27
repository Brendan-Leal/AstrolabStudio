import React from 'react';
import Card from './Card';
import style from '../styles/panel.module.css';

const CARD_CONTENT = [
  {
    key: 3,
    text: "One 30 minute discovery call to learn more about you, your business, and your goals! We'll get a deeper understanding of who you are, and figure out the root cause of what's working and not working for your business.",
  },
  {
    key: 2,
    text: "Develop a clear message. Once we've determined your audience, we get to building. From custom sites with brand messaging, to specific research about where your potential customers are online.",
  },
  {
    key: 1,
    text: 'Blast off. By developing a clearer presence online, you land better clients, and grow your business.',
  },
];

export default function Panel() {
  return (
    <div className={style.panel}>
      {
          CARD_CONTENT.map((content) => (
            <Card
              content={content.text}
              key={content.key}
              count={content.key}
            />
          ))
        }
    </div>
  );
}

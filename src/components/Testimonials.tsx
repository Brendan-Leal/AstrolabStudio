import React from 'react';
import Image from 'next/image';
import styles from '../styles/testimonials.module.css';
import tsr from '../../public/tsr-scrnsht.png';
import thr from '../../public/thr-scrnsht.png';

export default function Testimonials() {
  return (
    <>
      <div className={styles.title}>
        <h2>Testimonials</h2>
        <p>Check out our past work and what people are saying about us!</p>
      </div>
      <section className={styles.sectionContainer}>
        {/* TSR */}
        <div>
          <div className={styles.imgContainer}>
            <a href="https://thescriptrighter.com" target="_blank" rel="noreferrer">
              <Image
                src={tsr}
                alt="the script righter home page"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  borderRadius: '30px 30px 0 0',
                }}
              />
            </a>
          </div>
          <div className={styles.container}>
            <p>
              {/* eslint-disable-next-line max-len */}
              &quot;I lovingly refer to Marisa and Brendan Leal as the dynamic duo. Like minded siblings and business partners, the combination of their creativity and professionalism makes for a winning combination, your one stop for exceptional attention to web design, SEO, and monetizing your business through strategic social media suggestions. Astrolab Studio is fantastic!&quot;
            </p>
            <br />
            <p>
              Firdosi Wharton-Ali,
              <br />
              <a href="https://thescriptrighter.com" target="_blank" rel="noreferrer">thescriptrighter.com</a>
            </p>
          </div>
        </div>

        {/* THR */}
        <div>
          <div className={styles.imgContainer}>
            <a href="https://trueheartromance.com" target="_blank" rel="noreferrer">
              <Image
                src={thr}
                alt="true heart romance home page"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  borderRadius: '30px 30px 0 0',
                }}
              />
            </a>
          </div>
          <div className={styles.container}>
            <p>
              {/* eslint-disable-next-line max-len */}
              &quot;Working with Brendan and Marisa has been the best decision of my life. They created my website that far surpassed my dream and expectation!&quot;
            </p>
            <br />
            <p>
              Karen Tucci,
              <br />
              <a href="https://trueheartromance.com" target="_blank" rel="noreferrer">trueheartromance.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

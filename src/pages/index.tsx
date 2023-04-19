import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import brendanPfp from '../../public/brendan-pfp.png';
import marisaPfp from '../../public/marisa-pfp.png';
import style from '../styles/index.module.css';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Astrolab Studio</title>
        <meta name="description" content="From web development to digital strategy, curating and building an online presence is just the beginning. We're here to help every step of the journey." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <section className={style.container}>
        <h2>Your Passion, Our Mission</h2>
        <p>
          From web development to digital strategy, curating and building an
          online presence is just the beginning. We&apos;re here to help every step
          of the journey.
        </p>
        <div className={style.headshots}>
          <Image
            src={marisaPfp}
            width={150}
            height={150}
            alt="Marisa headshot"
            className={style.pfp}
            // priority
            placeholder="blur"
          />
          <Image
            src={brendanPfp}
            width={150}
            height={150}
            alt="Brendan headshot"
            className={style.pfp}
            // priority
            placeholder="blur"
          />
        </div>
        <h2>Welcome Aboard</h2>
        <p>
          Hi, we&apos;re Marisa and Brendan Leal. Brother and sister duo with a
          shared passion of all things online culture. From dial-up in our
          childhood home, to AI in our pockets, we know the internet can be a
          wonderful and whacky place.
        </p>
        <br />
        <p>
          From creating websites to content strategy,
          we&apos;re here to help you take off, online.
        </p>
        <h2>How We Can Help</h2>
        <ul>
          <li>Web Development</li>
          <li>e-Commerce</li>
          <li>Content & Copywriting</li>
          <li>Social Media Strategy</li>
          <li>Content Strategy</li>
          <li>Paid & Social Advertising</li>
          <li>Brand Awareness & Development</li>
          <li>Email Marketing</li>
        </ul>
        <ContactForm />
      </section>
    </>
  );
}

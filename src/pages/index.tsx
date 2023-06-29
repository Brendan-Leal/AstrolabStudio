import React, { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Panel from '@/components/Panel';
import FooterContext from '@/Context/FooterContext';
import brendanPfp from '../../public/brendan-pfp.png';
import marisaPfp from '../../public/marisa-pfp.png';
import style from '../styles/index.module.css';

export default function LandingPage() {
  const footerRef = useContext(FooterContext);

  const scrollToForm = () => {
    const target = footerRef?.current;

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Astrolab Studio | Digital Marketing and Web Development</title>
        <meta name="author" content="Brendan Leal" />
        <meta name="description" content="We create and support websites through our digital marketing services. Copy writing, email marketing, social media, web development and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Facebook Meta Tags  */}
        <meta property="og:url" content="https://astrolabstudio.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Astrolab Studio | Digital Marketing and Web Development" />
        <meta property="og:description" content="Website development and digital marketing. Read more about us and how we can help." />
        <meta property="og:image" content="https://astrolabstudio.com/OGImage.png" />

        {/* Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://astrolabstudio.com" />
        <meta name="twitter:title" content="Astrolab Studio | Digital Marketing and Web Development" />
        <meta name="twitter:description" content="Website development digital marketing. Read more about us and how we can help." />
        <meta name="twitter:image" content="https://astrolabstudio.com/OGImage.png" />

      </Head>
      <article className={style.container}>
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
            placeholder="blur"
          />
          <Image
            src={brendanPfp}
            width={150}
            height={150}
            alt="Brendan headshot"
            className={style.pfp}
            placeholder="blur"
          />
        </div>
        <button onClick={scrollToForm} type="button" className="btn1">
          Send A Transmission
        </button>
        <h2>Welcome Aboard</h2>
        <p>
          Hi, we&apos;re Marisa and Brendan Leal. Brother and sister duo with a
          shared passion of all things online culture. From dial-up in our
          childhood home, to AI in our pockets, we know the internet can be a
          wonderful and whacky place.
        </p>
        <br />
        <p>
          <br />
          From creating websites to content strategy,
          we&apos;re here to help you take off, online. Our strategy is easy as:
        </p>
        <Panel />
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
      </article>
    </>
  );
}

import React, { ReactElement, useRef } from 'react';
import { Poppins } from 'next/font/google';
import Footer from './Footer';
import Header from './Header';
import FooterContext from '../Context/FooterContext';
import style from '../styles/layout.module.css';

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactElement }) {
  const footerRef = useRef<HTMLFormElement>(null);

  return (
    <div className={`${poppins.className} `}>
      <FooterContext.Provider value={footerRef}>
        <Header />
        <div className={style.background}>
          <main>{children}</main>
          <Footer />
        </div>
      </FooterContext.Provider>
    </div>
  );
}

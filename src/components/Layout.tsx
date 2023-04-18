import React, { ReactElement } from 'react';
import { Poppins } from 'next/font/google';
import style from '../styles/layout.module.css';
import Footer from './Footer';
import Header from './Header';

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className={`${style.layout} ${poppins.className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

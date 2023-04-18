import React, { ReactElement } from 'react';
import { Poppins } from 'next/font/google';
import style from '../styles/layout.module.css';
import Footer from './Footer';
import Header from './Header';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
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

import React, { ReactElement } from 'react';
import style from '../styles/layout.module.css';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className={style.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

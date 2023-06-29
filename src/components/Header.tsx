import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import style from '../styles/header.module.css';
import logo from '../../public/Astrolab_Studio_Logo_transparent.png';

export default function Header() {
  const nextRouter = useRouter();
  const [currentPath, setCurrentPath] = useState(nextRouter.pathname);
  const setCurrentNavStyle = (path: string) => (path === currentPath ? 'activeNav' : '');

  useEffect(() => {
    setCurrentPath(nextRouter.pathname);
  }, [nextRouter.pathname]);
  return (
    <>

      <header className={style.header}>
        <Image
          src={logo}
          alt="logo"
          className={style.logo}
          priority
        />
        <p>Finding your space online</p>
      </header>

      <nav>
        <Link
          href="/"
          className={setCurrentNavStyle('/')}
        >
          Home
        </Link>
        <Link
          href="testimonials"
          className={setCurrentNavStyle('/testimonials')}
        >
          Testimonials
        </Link>
      </nav>
    </>
  );
}

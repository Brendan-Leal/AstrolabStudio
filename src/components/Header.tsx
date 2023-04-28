import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from '../styles/header.module.css';

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
        <div>
          <h1><Link href="/">Astrolab Studio</Link></h1>
          <p>Finding your space online</p>
        </div>
        <div className={style.planet}>&#x1FA90;</div>
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

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import style from '../styles/nav.module.css';
import logo from '../../public/Astrolab_Studio_Logo_transparent.png';

export default function Nav() {
  const nextRouter = useRouter();
  const [currentPath, setCurrentPath] = useState(nextRouter.pathname);
  const setCurrentNavStyle = (path: string) => (path === currentPath ? style.activeNav : '');

  useEffect(() => {
    setCurrentPath(nextRouter.pathname);
  }, [nextRouter.pathname]);
  return (
    <nav className={style.mainNav}>
      <div className={style.logoContainer}>
        <Image
          src={logo}
          alt="logo"
          className={style.logo}
          priority
        />
        <p>Finding your space online</p>

      </div>
      <div className={style.linksContainer}>
        <Link
          href="/"
          className={`${setCurrentNavStyle('/')} ${style.navLink}`}
        >
          Home
        </Link>
        <Link
          href="testimonials"
          className={`${style.navLink} ${setCurrentNavStyle('/testimonials')}`}
        >
          Testimonials
        </Link>
      </div>
    </nav>
  );
}

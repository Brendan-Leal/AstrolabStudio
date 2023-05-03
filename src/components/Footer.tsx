import React, { useContext } from 'react';
import FooterContext from '@/Context/FooterContext';
import styles from '../styles/footer.module.css';
import ContactForm from './ContactForm';

export default function Footer() {
  const footerRef = useContext(FooterContext);

  return (
    <footer ref={footerRef}>
      <ContactForm />
      <div className={styles.footer}>
        <div className={styles.semiCircle} />
      </div>
    </footer>
  );
}

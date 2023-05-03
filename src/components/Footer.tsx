import React from 'react';
import styles from '../styles/footer.module.css';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer>
      <ContactForm />
      <div className={styles.footer}>
        <div className={styles.semiCircle} />
      </div>
    </footer>
  );
}

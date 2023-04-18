import React, { useState } from 'react';
import axios from 'axios';
import style from '../styles/contactForm.module.css';

const FORM_URL = 'https://getform.io/f/48b914c1-2db2-49fa-bec1-0518bdc159e0';
type GetFormResponse = {
  success: boolean,
  formValues: {
    email: string,
    fname: string,
    lname: string,
    message: string,
  }
};

export default function ContactForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
  });

  const [launchRocket, setLaunchRocket] = useState(false);

  const handleServerResponse = (data: GetFormResponse, form: HTMLFormElement) => {
    setServerState({
      submitting: false,
    });
    if (data.success) {
      form.reset();
    }
  };
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setServerState({ submitting: true });

    try {
      const { data } = await axios.post<GetFormResponse>(FORM_URL, new FormData(form), {
        headers: { Accept: 'application/json' },
      });

      handleServerResponse(data, form);
      setLaunchRocket(true);
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        handleServerResponse(err.response?.data, form);
      }
      throw err;
    }
  };
  return (
    <section className={style.container}>
      <h2>Ready For Takeoff?</h2>
      <form onSubmit={handleFormSubmit} action="#" method="POST" className={style.form}>
        <label htmlFor="fname">First Name: </label>
        <input id="fname" required minLength={1} type="text" name="fname" />

        <label htmlFor="lname"> Last Name: </label>
        <input required minLength={1} type="text" name="lname" id="lname" />

        <label htmlFor="email">Email: </label>
        <input required type="email" name="email" id="email" />

        <label htmlFor="message">Message: </label>
        <textarea required id={style.message} name="message" />

        <button
          type="submit"
          disabled={serverState.submitting}
          className={style.submitBtn}
        >
          Send
        </button>
        <div className={`${style.rocket} ${launchRocket ? style.launch : ''}`}>&#x1F680;</div>
      </form>
    </section>

  );
}

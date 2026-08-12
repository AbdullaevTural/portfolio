import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// next link
import Link from "next/link";

// icons 
import { BsArrowRight } from "react-icons/bs";

export const ContactUs = () => {
    const form = useRef();
    const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
    const [consentGiven, setConsentGiven] = useState(false);
    const [consentError, setConsentError] = useState(false);

    const handleConsentChange = (e) => {
      setConsentGiven(e.target.checked);
      if (e.target.checked) {
        setConsentError(false);
      }
    };

    const sendEmail = (e) => {
      e.preventDefault();

      if (!consentGiven) {
        setConsentError(true);
        return;
      }

      setFormSubmitted({ title: 'Отправка письма...', paragraph: '' });
      emailjs
        .sendForm('service_2ral', 'template_su4fjal', form.current, {
          publicKey: 'CxYSqcAM_IC_MBcgr',
        })
        .then(({ status }) => {
            if (status === 200) {
              setFormSubmitted({ title: 'Сообщение отправлено!', paragraph: 'Турал скоро свяжется с вами.' });
            } else {
              setFormSubmitted({ title: 'Неожиданный код состояния, полученный от EmailJS, повторите попытку позже', paragraph: 'Пожалуйста, свяжитесь с Туралом по телефону или электронной почте.' });
            }
          }, (err) => {
            // eslint-disable-next-line no-console
            console.log(err);
            setFormSubmitted({ title: 'Ошибка при отправке сообщения, повторите попытку позже', paragraph: 'Пожалуйста, свяжитесь с Туралом по телефону или электронной почте.' });
          });
    };

  return formSubmitted.title === '' ? (
        <form ref={form}  onSubmit={sendEmail} className="flex-1 flex flex-col gap-6 w-full mx-auto">
        <div className="flex gap-x-6 w-full">
            <input type="text" name="user_name"  placeholder="имя" className="input"/>
            <input type="email" name="user_email" placeholder="email" className="input"/>
          </div>
          <textarea name="message" placeholder="сообщение" className="textarea"></textarea>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-start gap-x-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={consentGiven}
                onChange={handleConsentChange}
                className="mt-1 h-5 w-5 min-w-[20px] shrink-0 rounded border border-white/20 bg-transparent accent-accent dark:accent-accentDark cursor-pointer"
                aria-required="true"
                aria-invalid={consentError}
              />
              <label htmlFor="consent" className="text-sm text-white/60 font-light leading-[1.6] cursor-pointer">
                Я даю согласие на{' '}
                <Link href="/privacy-policy" className="underline text-white/80 hover:text-accent dark:hover:text-accentDark transition-all duration-300">
                  обработку моих персональных данных
                </Link>
              </label>
            </div>
            {consentError && (
              <p className="text-accentDark text-sm">
                Необходимо дать согласие на обработку персональных данных
              </p>
            )}
          </div>
          <button  className="btn self-center rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center  overflow-hidden hover:border-accent dark:hover:border-accentDark group">
            <span className=" group-hover:-translate-y-[120%]  group-hover:opacity-0 transition-all duration-300">Отправить</span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
          </button>
        </form>): (
    <div className="flex flex-col items-center">
      <h3 className="text-lato text-2xl font-light text-white">{formSubmitted.title}</h3>
      <p>{formSubmitted.paragraph}</p>
    </div>
  );
}   

export default ContactUs;
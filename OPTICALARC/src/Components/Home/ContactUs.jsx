import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ynmx3oj', 'template_o3f0ufy', form.current, {
                publicKey: 'E-s2TiiRkbTEwB44F',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className="bg-white-50 dark:bg-slate-800" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                           
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                We would love to speak with you. Fill out the form provided below or email us your request to <a href="mailto:info@opticalarc.com" className="text-blue-600">info@opticalarc.com</a>
                            </p>
                            <ul className="mb-6 md:mb-0 space-y-4">
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path
                                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Our Address
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">World Trade Center ,Tower-1 , 207</p>
                                        <p className="text-gray-600 dark:text-slate-400"> Kharadi, Pune, Maharashtra 411014</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path
                                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                            </path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Contact
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">Mobile: +91  8600027589</p>
                                        <p className="text-gray-600 dark:text-slate-400">Mail: info@opticalarc.com</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Working hours
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 09:30 - 06:30</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                            <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                            <form ref={form} onSubmit={sendEmail} >
                                <div className="mb-6 space-y-4">
                                    <div>
                                        <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input
                                            type="text"
                                            id="name"
                                            autoComplete="given-name"
                                            placeholder="Your name"
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                                            name="name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input
                                            type="email"
                                            id="email"
                                            autoComplete="email"
                                            placeholder="Your email address"
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                                            name="email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            cols="30"
                                            rows="5"
                                            placeholder="Write your message..."
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="inline-block w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md text-center"
                                    >
                                    <a href="mailto:info@opticalarc.com">Send Message</a>  
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="app mt-8">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4708784999343!2d73.94672727501393!3d18.552798082547003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c34a95da0099%3A0x66edab93b328b0be!2sWorld%20Trade%20Center%2C%20Tower%201!5e0!3m2!1sen!2sin!4v1717405232723!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

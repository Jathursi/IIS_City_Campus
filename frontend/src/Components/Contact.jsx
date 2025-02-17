import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_53hoyon",
        "template_mikzp9k",
        form.current,
        "uk6hSMKyxcHRGKBqM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
          // alert("Message sent!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert(error.text)
        }
      );
  };

  return (
    <div className="container mx-auto m-10 p-6 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Contact Us
      </h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col mx-20">
        <label className="font-semibold text-gray-700">Name</label>
        <input
          type="text"
          name="user_name"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-teal-500"
          required
        />

        <label className="font-semibold text-gray-700 mt-4">Email</label>
        <input
          type="email"
          name="user_email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-teal-500"
          required
        />

        <label className="font-semibold text-gray-700 mt-4">Message</label>
        <textarea
          name="message"
          className="border border-gray-300 rounded-md p-2 h-28 focus:outline-none focus:border-teal-500"
          required
        ></textarea>

        <button
          type="submit"
          className="mt-6 bg-b3 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition-all"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

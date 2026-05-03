import emailjs from "emailjs-com";
import { useState, useRef } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const form = useRef(); // <-- IMPORTANT

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94tzphv",
        "template_ovwcdpf",
        form.current, // <-- NOW this works
        "sgP_nGN8vhw29nxtQ"
      )
      .then(() => {
        setSent(true);
        form.current.reset();
        setTimeout(() => setSent(false), 3000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <section id="contact" className="py-20 bg-transparent px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
        Contact Me
      </h2>

      <form
        ref={form}       
        onSubmit={sendEmail}
        className="max-w-xl mx-auto mt-10 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border dark:bg-gray-800 rounded-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border dark:bg-gray-800 rounded-lg"
          required
        />

        <textarea
          rows="5"
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border dark:bg-gray-800 rounded-lg"
          required
        ></textarea>

        <button className="w-full bg-blue-600 py-3 text-white rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>

        {sent && (
          <p className="text-green-600 dark:text-green-400 text-center mt-2">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}

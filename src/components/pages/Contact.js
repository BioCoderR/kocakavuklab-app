import React, { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import PageHeader from "../common/PageHeader"; 
import GoToTopButton from "../common/GoToTopButton";
const Contact = () => {
  useEffect(() => {
    emailjs.init("wprxy5IfLB3zRbbj9");
  }, []);

  const [checked, setChecked] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const formRef = useRef(null);

  const handleChange = () => setChecked(!checked);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(e.target.value));
    handleInputChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('input[type="submit"]');
    btn.value = "Sending...";

    emailjs.sendForm("default_service", "template_75zmo4n", e.target).then(
      () => {
        btn.value = "Send Email";
        alert("Message Sent!");

        // Reset form
        setFormData({ name: "", email: "", message: "" });
        setChecked(false);
        setEmailValid(false);
      },
      (err) => {
        btn.value = "Send Email";
        alert("Error sending message: " + JSON.stringify(err));
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 py-12 px-6">
      {/* Reusable Page Header */}
      <PageHeader title="Get in Touch" subtitle="We'd love to hear from you!" />

      {/* Rest of the Contact Page Code */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8">
        
          {/* Contact Form Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={formData.email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {/* Privacy Agreement */}
          <div className="flex items-start">
            <input
              type="checkbox"
              required
              onChange={handleChange}
              className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <p className="ml-3 text-sm text-gray-600">
              I have read and agree to the{" "}
              <Link
                to="/privacypolicy"
                className="text-blue-600 hover:underline"
              >
                data privacy policy
              </Link>{" "}
              and the processing of my personal data.
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <input
              type="submit"
              value="Send Message"
              disabled={!checked || !emailValid}
              className={`px-6 py-3 font-bold text-white rounded-lg transition ${
                checked && emailValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"
              }`}
            />
          </div>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="w-full max-w-4xl mt-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Lab Location
        </h2>
        <iframe
          className="w-full h-56 md:h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.1821154978984!2d6.9864337766158355!3d51.43644927179727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c2de2e687307%3A0x1ac25e006ad27840!2sEssen%20University%20Hospital%20Department%20of%20Hematology!5e0!3m2!1sen!2sde!4v1691880146400!5m2!1sen!2sde"
          loading="lazy"
          title="Lab Location Map"
          allowFullScreen=""
          style={{ border: 0 }}
        ></iframe>
      </div>
      </div>
      <GoToTopButton />
    </div>
  );
};

export default Contact;
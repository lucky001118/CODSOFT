import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_wv8msho",
          "template_36s3e5f",
          formData,
          "dk8fmnsTRgxwraXsp"
        )
        .then((response) => {
          toast.success("Message sent Successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log("FAILD ....", error);
          toast.error("Faild to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="p-4 lg:w-3/4 mx-auto" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
      <motion.form
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8, delay:0.7}} 
      onSubmit={handleSubmit}>
        <div className="flex mb-4 space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.name && (
                <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}} 
                className="text-sm text-rose-800">{errors.name}</motion.p>
              )}
          </div>

          <div className="lg:w-1/2">
            <input
              type="emil"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.email && (
                <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}} 
                className="text-sm text-rose-800">{errors.email}</motion.p>
              )}
          </div>
        </div>

        <div className="mb-4 ">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              rows="6"
            />
            {errors.message && (
                <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}} 
                className="text-sm text-rose-800">{errors.message}</motion.p>
              )}
          </div>
          <button type="submit" className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 font-semibold text-sm text-stone-900 hover:bg-stone-300
            ${isSending ? "cursor-not-allowed opacity-50":""}`}
            disabled={isSending}
            >
                <div className="flex items-center justify-center gap-2">
                    {isSending ? "Sending...." : "Send"}
                    <FiSend />
                </div>
            </button>
      </motion.form>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-700 via-gray-500 to-green-900 text-white"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="bg-opacity-10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-2xl text-white border border-white/30"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
        <p className="text-gray-200 text-center mb-6">We'd love to hear from you. Fill out the form below.</p>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit} 
          className="space-y-4"
        >
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-green-400 placeholder-white/70" />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-green-400 placeholder-white/70" />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-green-400 placeholder-white/70" />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit" 
            className="w-full p-3 rounded-lg bg-green-500 hover:bg-green-400 text-white font-semibold transition"
          >
            Send Message
          </motion.button>
        </motion.form>
        
        <div className="mt-6 text-center text-gray-200">
          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-5 h-5 text-green-300" />
            <p>contact@yourdomain.com</p>
          </div>
          <div className="flex items-center justify-center space-x-3 mt-2">
            <Phone className="w-5 h-5 text-green-300" />
            <p>+1 234 567 890</p>
          </div>
          <div className="flex items-center justify-center space-x-3 mt-2">
            <MapPin className="w-5 h-5 text-green-300" />
            <p>123, Main Street, Your City</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, url: "#", name: "Facebook" },
  { icon: Twitter, url: "#", name: "Twitter" },
  { icon: Linkedin, url: "#", name: "LinkedIn" },
  { icon: Mail, url: "#", name: "Email" }
];

export default function JobPortalFooter() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold">Job Portal</h2>
          <p className="text-gray-400 mt-2">Connecting Talent with Opportunity</p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <link.icon className="w-6 h-6 text-white" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="text-center text-gray-500 mt-8 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}

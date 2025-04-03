import { motion } from "framer-motion";
import { Briefcase, Users, ShieldCheck, Search } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Find Your Dream Job",
    description: "Easily discover jobs that match your skills and interests."
  },
  {
    icon: Users,
    title: "Connect with Recruiters",
    description: "Build your professional network and get noticed by top recruiters."
  },
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description: "Apply with confidence knowing all job postings are verified."
  },
  {
    icon: Search,
    title: "Advanced Search Filters",
    description: "Find jobs by category, location, and salary expectations."
  }
];

export default function JobPortalComponent() {
  return (
    <section className="bg-white py-16 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why You Need the Job Portal
        </motion.h2>
        <motion.p 
          className="text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A smart way to connect with recruiters, find the best jobs, and enhance your career.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-gray-100 rounded-2xl shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

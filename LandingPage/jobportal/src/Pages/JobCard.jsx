import { motion } from "framer-motion";
import { MapPin, Briefcase, Building, Calendar } from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden p-6 border border-gray-200 hover:shadow-2xl transition-all"
    >
      <div className="flex items-center space-x-4">
        <img 
          src={job.companyLogo} 
          alt={job.companyName} 
          className="w-16 h-16 object-cover rounded-full border border-gray-300"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
          <p className="text-gray-500 flex items-center space-x-1">
            <Building className="w-4 h-4 text-gray-400" />
            <span>{job.companyName}</span>
          </p>
        </div>
      </div>
      
      <p className="mt-3 text-gray-600 line-clamp-3">{job.description}</p>
      
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Briefcase className="w-4 h-4 text-gray-400" />
          <span>{job.role}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>{job.postedDate}</span>
        </div>
      </div>
      
      <div className="mt-5 flex justify-between items-center">
        <span className="text-green-600 font-semibold">{job.salary}</span>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Apply Now
        </button>
      </div>
    </motion.div>
  );
};

export default JobCard;
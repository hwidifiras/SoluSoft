import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  title, 
  description, 
  icon, 
  features = [], 
  className = '', 
  onClick,
  children,
  hover = true 
}) => {
  return (
    <motion.div
      className={`card p-6 ${className} ${hover ? 'cursor-pointer' : ''}`}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-4 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-xl flex items-center justify-center mx-auto">
            <div className="text-primary-600 dark:text-primary-400">
              {icon}
            </div>
          </div>
        </div>
      )}

      {/* Title */}
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-center">
          {description}
        </p>
      )}

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
              <svg
                className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Custom Children */}
      {children}
    </motion.div>
  );
};

export default Card;

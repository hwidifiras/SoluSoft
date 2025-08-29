import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'dashboard', name: 'Dashboards' },
    { id: 'data', name: 'Big Data' },
    { id: 'cloud', name: 'Cloud Solutions' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'A comprehensive e-commerce solution with real-time inventory management, payment integration, and analytics dashboard.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: ['Real-time inventory', 'Payment processing', 'Analytics', 'Mobile responsive'],
      status: 'Completed',
      client: 'Retail Company'
    },
    {
      id: 2,
      title: 'Healthcare Management App',
      category: 'mobile',
      description: 'Mobile application for healthcare providers to manage patient records, appointments, and medical histories.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'Node.js', 'PostgreSQL'],
      features: ['Patient management', 'Appointment scheduling', 'Medical records', 'Push notifications'],
      status: 'Completed',
      client: 'Healthcare Provider'
    },
    {
      id: 3,
      title: 'Business Intelligence Dashboard',
      category: 'dashboard',
      description: 'Advanced analytics dashboard providing real-time insights into business operations and KPIs.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Apache Kafka'],
      features: ['Real-time analytics', 'Custom reports', 'Data visualization', 'Role-based access'],
      status: 'Completed',
      client: 'Enterprise Client'
    },
    {
      id: 4,
      title: 'Data Pipeline Solution',
      category: 'data',
      description: 'Scalable data processing pipeline for handling large volumes of customer data and generating insights.',
      image: '/api/placeholder/400/300',
      technologies: ['Apache Spark', 'Kafka', 'Python', 'Elasticsearch', 'Docker'],
      features: ['Real-time processing', 'Data transformation', 'Machine learning', 'Scalable architecture'],
      status: 'In Progress',
      client: 'Fintech Startup'
    },
    {
      id: 5,
      title: 'Cloud Migration Project',
      category: 'cloud',
      description: 'Complete cloud migration of legacy systems to AWS with improved performance and reduced costs.',
      image: '/api/placeholder/400/300',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      features: ['Auto-scaling', 'Cost optimization', 'High availability', 'Monitoring'],
      status: 'Completed',
      client: 'Manufacturing Company'
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      category: 'web',
      description: 'Web platform for analyzing social media trends and sentiment analysis for brand management.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Python', 'TensorFlow', 'MongoDB', 'Redis'],
      features: ['Sentiment analysis', 'Trend tracking', 'Report generation', 'API integration'],
      status: 'Completed',
      client: 'Marketing Agency'
    },
    {
      id: 7,
      title: 'IoT Monitoring Dashboard',
      category: 'dashboard',
      description: 'Real-time monitoring dashboard for IoT devices with alerts and predictive maintenance features.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'InfluxDB', 'MQTT', 'Grafana'],
      features: ['Real-time monitoring', 'Predictive alerts', 'Device management', 'Historical data'],
      status: 'In Progress',
      client: 'IoT Company'
    },
    {
      id: 8,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Complete food delivery solution with customer app, restaurant dashboard, and delivery tracking.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps'],
      features: ['Order tracking', 'Payment integration', 'Restaurant management', 'Real-time updates'],
      status: 'Completed',
      client: 'Restaurant Chain'
    },
    {
      id: 9,
      title: 'Machine Learning Platform',
      category: 'data',
      description: 'MLOps platform for model training, deployment, and monitoring with automated pipelines.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'MLflow', 'Kubernetes', 'TensorFlow', 'Apache Airflow'],
      features: ['Model training', 'Automated deployment', 'Performance monitoring', 'Version control'],
      status: 'In Progress',
      client: 'AI Startup'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden" hover={false}>
        {/* Project Image Placeholder */}
        <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-xl mb-6 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Project Preview</p>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-4">
          {/* Title and Status */}
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === 'Completed' 
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
            }`}>
              {project.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Client */}
          <div className="text-sm">
            <span className="text-gray-500 dark:text-gray-400">Client: </span>
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              {project.client}
            </span>
          </div>

          {/* Technologies */}
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Key Features:
            </p>
            <ul className="space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-3 h-3 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0"
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
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our diverse range of successful projects across web development, 
              mobile applications, data analytics, and cloud solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Project <span className="text-gradient">Statistics</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '15+', label: 'Technologies Used' },
              { number: '99%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card p-6">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Start Your Next Project
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to join our portfolio of successful projects? Let's discuss your ideas 
              and create something amazing together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn-primary inline-block">
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

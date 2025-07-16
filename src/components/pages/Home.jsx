import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  ChevronRight,
  Award,
  Target,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const stats = [
    { number: '500+', label: 'Students', icon: Users },
    { number: '98%', label: 'KCSE Pass Rate', icon: Trophy },
    { number: '25+', label: 'Qualified Teachers', icon: BookOpen },
    { number: '15', label: 'Years of Excellence', icon: Award }
  ];

  const highlights = [
    {
      title: 'Academic Excellence',
      description: 'Consistently high performance in KCSE examinations with students joining top universities.',
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      title: 'Holistic Development',
      description: 'Beyond academics - sports, arts, leadership training, and character development.',
      icon: Heart,
      color: 'bg-green-500'
    },
    {
      title: 'Modern Facilities',
      description: 'Well-equipped laboratories, library, computer lab, and sports facilities.',
      icon: BookOpen,
      color: 'bg-purple-500'
    }
  ];

  const recentNews = [
    {
      date: '2024-01-15',
      title: 'New Science Laboratory Opened',
      excerpt: 'State-of-the-art chemistry and physics laboratory now operational...'
    },
    {
      date: '2024-01-10',
      title: 'Outstanding KCSE Results 2023',
      excerpt: 'Kahatia Secondary School achieves 98% pass rate in KCSE 2023...'
    },
    {
      date: '2024-01-05',
      title: 'Sports Day Success',
      excerpt: 'Annual sports day showcases student talent in various athletic events...'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Welcome to 
                <span className="block text-yellow-300">Kahatia Secondary School</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Nurturing Excellence, Building Future Leaders
              </p>
              <p className="text-lg mb-8 text-blue-100">
                Established in 2009, we are committed to providing quality education that develops 
                academic excellence, moral values, and leadership skills in our students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 text-center"
                >
                  Apply Now
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="School Building"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Our Beautiful Campus</h3>
                  <p className="text-blue-100">Modern facilities in a serene learning environment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-school-primary text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Kahatia, Eastern Province, Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+254 712 345 678</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@kahatiasecondary.ac.ke</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-school-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kahatia Secondary School?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive education that prepares students for success in higher education and life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg card-hover"
              >
                <div className={`${highlight.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                  <highlight.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News & Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* News */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
              <div className="space-y-6">
                {recentNews.map((news, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-l-4 border-school-primary pl-6 pb-6"
                  >
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(news.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{news.title}</h3>
                    <p className="text-gray-600">{news.excerpt}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Quick Access</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-4">
                  <Link
                    to="/academics"
                    className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-school-primary" />
                      <span className="font-medium">Academic Programs</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                  
                  <Link
                    to="/admissions"
                    className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-school-primary" />
                      <span className="font-medium">Admissions</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                  
                  <Link
                    to="/contact"
                    className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-school-primary" />
                      <span className="font-medium">Contact Us</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </div>
              </div>

              {/* Calendar Widget */}
              <div className="mt-8 bg-school-primary text-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">Upcoming Events</h3>
                </div>
                <div className="space-y-3">
                  <div className="border-l-2 border-yellow-400 pl-3">
                    <div className="text-sm text-blue-100">March 15, 2024</div>
                    <div className="font-medium">Term 1 Examinations</div>
                  </div>
                  <div className="border-l-2 border-yellow-400 pl-3">
                    <div className="text-sm text-blue-100">April 5, 2024</div>
                    <div className="font-medium">Science Fair</div>
                  </div>
                  <div className="border-l-2 border-yellow-400 pl-3">
                    <div className="text-sm text-blue-100">April 20, 2024</div>
                    <div className="font-medium">Sports Day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
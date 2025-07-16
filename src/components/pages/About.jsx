import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for academic and moral excellence in all endeavors.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We uphold honesty, respect, and ethical behavior in all interactions.'
    },
    {
      icon: Users,
      title: 'Unity',
      description: 'We celebrate diversity and work together towards common goals.'
    },
    {
      icon: BookOpen,
      title: 'Learning',
      description: 'We foster a culture of continuous learning and personal growth.'
    }
  ];

  const leadership = [
    {
      name: 'Mr. Joseph Mwangi',
      position: 'Principal',
      education: 'M.Ed (Educational Leadership), University of Nairobi',
      experience: '15 years in education leadership',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Mrs. Grace Njeri',
      position: 'Deputy Principal',
      education: 'B.Ed (Mathematics & Physics), Kenyatta University',
      experience: '12 years in secondary education',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Mr. David Kiprotich',
      position: 'Director of Studies',
      education: 'M.Sc (Chemistry), University of Eldoret',
      experience: '10 years in curriculum development',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="bg-school-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Our School</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our rich history, mission, and commitment to educational excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* School History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kahatia Secondary School was established in 2009 with a vision to provide quality 
                  secondary education to the youth of Eastern Province, Kenya. Starting with just 40 
                  students in Form One, we have grown to become one of the leading secondary schools 
                  in the region.
                </p>
                <p>
                  Founded through the collaborative efforts of the local community, the County Government, 
                  and the Ministry of Education, our school was built on the principles of academic 
                  excellence, moral uprightness, and holistic development.
                </p>
                <p>
                  Over the years, we have consistently produced outstanding KCSE results, with our 
                  graduates gaining admission to prestigious universities both locally and internationally. 
                  Our commitment to quality education has earned us recognition as a center of excellence 
                  in the region.
                </p>
                <p>
                  Today, we serve over 500 students with a dedicated team of qualified teachers and 
                  support staff, all working towards our shared mission of nurturing future leaders.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="School Historical Building"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">2009</div>
                <div className="text-sm">Established</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be a leading center of academic excellence that produces well-rounded, 
                morally upright, and globally competitive graduates who contribute positively 
                to society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-500 p-3 rounded-full">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide quality, holistic, and responsive education that nurtures academic 
                excellence, moral values, and life skills, preparing students for higher education 
                and meaningful contribution to society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide our daily operations and interactions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-school-primary to-school-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide our institution towards excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center card-hover"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-gray-100"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-school-primary font-medium mb-3">{leader.position}</p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Education:</strong> {leader.education}</p>
                  <p><strong>Experience:</strong> {leader.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 rounded-xl p-6 text-center"
            >
              <Award className="h-12 w-12 text-school-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Performing School</h3>
              <p className="text-gray-600">Regional KCSE Excellence Award 2023</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-green-50 rounded-xl p-6 text-center"
            >
              <Users className="h-12 w-12 text-school-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Impact</h3>
              <p className="text-gray-600">Outstanding Community Service Award 2022</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-purple-50 rounded-xl p-6 text-center"
            >
              <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation in Education</h3>
              <p className="text-gray-600">Digital Learning Pioneer Award 2021</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
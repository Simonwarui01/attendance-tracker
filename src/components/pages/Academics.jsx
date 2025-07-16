import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Beaker, 
  Calculator, 
  Globe, 
  Palette, 
  Cpu,
  Award,
  Users,
  Target,
  Calendar
} from 'lucide-react';

const Academics = () => {
  const subjects = [
    {
      category: 'Sciences',
      icon: Beaker,
      color: 'bg-blue-500',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Studies']
    },
    {
      category: 'Languages',
      icon: BookOpen,
      color: 'bg-green-500',
      subjects: ['English', 'Kiswahili', 'Literature']
    },
    {
      category: 'Humanities',
      icon: Globe,
      color: 'bg-purple-500',
      subjects: ['History', 'Geography', 'Christian Religious Education', 'Islamic Religious Education']
    },
    {
      category: 'Technical & Arts',
      icon: Palette,
      color: 'bg-orange-500',
      subjects: ['Art & Design', 'Music', 'Agriculture', 'Business Studies', 'Home Science']
    }
  ];

  const academicPrograms = [
    {
      title: 'Science Track',
      description: 'Mathematics, Physics, Chemistry, Biology - Preparing students for medical and engineering careers',
      duration: '4 Years',
      requirements: 'Minimum C+ in KCPE Mathematics and Science',
      icon: Beaker
    },
    {
      title: 'Humanities Track',
      description: 'History, Geography, Literature, Languages - Ideal for social sciences and law',
      duration: '4 Years',
      requirements: 'Strong performance in languages and social studies',
      icon: Globe
    },
    {
      title: 'Business Track',
      description: 'Business Studies, Economics, Mathematics - Foundation for commerce and entrepreneurship',
      duration: '4 Years',
      requirements: 'Good performance in Mathematics and English',
      icon: Calculator
    },
    {
      title: 'Technical Track',
      description: 'Computer Studies, Agriculture, Art & Design - Practical skills development',
      duration: '4 Years',
      requirements: 'Interest in practical and technical subjects',
      icon: Cpu
    }
  ];

  const facilities = [
    {
      name: 'Science Laboratories',
      description: 'Modern chemistry, physics, and biology labs with latest equipment',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Computer Laboratory',
      description: '40 modern computers with internet connectivity for ICT learning',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Library',
      description: 'Well-stocked library with over 5,000 books and digital resources',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Agriculture Farm',
      description: 'Practical learning facility for agriculture and environmental studies',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive curriculum designed to prepare students for success in higher education and careers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Following the Kenyan 8-4-4 education system with enhanced focus on practical skills and holistic development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 card-hover"
              >
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.subjects.map((subject, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">• {subject}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized tracks to match student interests and career aspirations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {academicPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-school-primary p-3 rounded-full">
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Duration:</strong> {program.duration}</p>
                  <p><strong>Requirements:</strong> {program.requirements}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Performance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Outstanding KCSE Performance</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kahatia Secondary School has consistently maintained excellent performance in the Kenya 
                  Certificate of Secondary Education (KCSE) examinations. Our comprehensive approach to 
                  education ensures students are well-prepared for national examinations.
                </p>
                <div className="grid grid-cols-2 gap-6 my-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-school-primary">98%</div>
                    <div className="text-sm text-gray-600">Pass Rate 2023</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-school-primary">8.5</div>
                    <div className="text-sm text-gray-600">Average Grade</div>
                  </div>
                </div>
                <p>
                  Our students consistently gain admission to top universities including University of Nairobi, 
                  Kenyatta University, Moi University, and other prestigious institutions both locally and internationally.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <Award className="h-8 w-8 text-school-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Top 10</div>
                  <div className="text-sm text-gray-600">Regional Ranking</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <Users className="h-8 w-8 text-school-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">University Admission</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-purple-50 p-6 rounded-xl text-center">
                  <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Completion Rate</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl text-center">
                  <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">15</div>
                  <div className="text-sm text-gray-600">Years Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Learning Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern facilities that support effective teaching and learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Beyond the Classroom</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive co-curricular programs for holistic development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-school-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sports & Athletics</h3>
              <p className="text-gray-600">Football, volleyball, athletics, and other sports programs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-10 w-10 text-school-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Arts & Culture</h3>
              <p className="text-gray-600">Drama, music, dance, and visual arts programs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Clubs</h3>
              <p className="text-gray-600">Science club, debate society, and academic competitions</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
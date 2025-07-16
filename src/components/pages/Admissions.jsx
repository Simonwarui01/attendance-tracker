import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  Users, 
  Clock,
  Phone,
  Mail,
  MapPin,
  Download
} from 'lucide-react';

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('requirements');

  const admissionProcess = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Submit completed application form with required documents',
      timeline: 'November - December'
    },
    {
      step: 2,
      title: 'Document Review',
      description: 'Academic records and documents are reviewed by admissions committee',
      timeline: 'January'
    },
    {
      step: 3,
      title: 'Selection & Notification',
      description: 'Successful candidates are notified and admission letters issued',
      timeline: 'February'
    },
    {
      step: 4,
      title: 'Fee Payment & Registration',
      description: 'Pay required fees and complete registration process',
      timeline: 'March'
    }
  ];

  const requirements = [
    'KCPE Certificate with minimum 250 marks',
    'Birth Certificate (Original and Copy)',
    'Passport-size photographs (4 copies)',
    'Transfer certificate from previous school',
    'Medical examination report',
    'Immunization certificate',
    'Parent/Guardian identification documents',
    'Completed application form'
  ];

  const feeStructure = [
    { item: 'Tuition Fee (Per Term)', amount: 'KSh 25,000' },
    { item: 'Boarding Fee (Per Term)', amount: 'KSh 15,000' },
    { item: 'Activity Fee (Per Year)', amount: 'KSh 5,000' },
    { item: 'Admission Fee (One-time)', amount: 'KSh 10,000' },
    { item: 'Uniform & Books', amount: 'KSh 12,000' },
    { item: 'Medical Insurance (Per Year)', amount: 'KSh 2,500' }
  ];

  const scholarships = [
    {
      name: 'Academic Excellence Scholarship',
      criteria: 'KCPE marks above 400',
      benefit: '50% tuition fee waiver',
      duration: 'Renewable annually based on performance'
    },
    {
      name: 'Need-Based Scholarship',
      criteria: 'Demonstrated financial need',
      benefit: '30% total fee reduction',
      duration: 'Subject to annual review'
    },
    {
      name: 'Sports Scholarship',
      criteria: 'Exceptional sporting talent',
      benefit: '25% fee reduction + sports equipment',
      duration: 'Based on continued participation'
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our community of learners and start your journey to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-yellow-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Calendar className="h-6 w-6 text-school-primary" />
              <div>
                <div className="font-semibold">Application Deadline</div>
                <div className="text-sm text-gray-600">December 31, 2024</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="h-6 w-6 text-school-primary" />
              <div>
                <div className="font-semibold">Available Spaces</div>
                <div className="text-sm text-gray-600">120 Form 1 Places</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-6 w-6 text-school-primary" />
              <div>
                <div className="font-semibold">Academic Year</div>
                <div className="text-sm text-gray-600">January - November</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent process to join our school community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {admissionProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="bg-school-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                {index < admissionProcess.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <div className="text-sm text-school-primary font-medium">{step.timeline}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('requirements')}
                  className={`px-8 py-4 text-sm font-medium ${
                    activeTab === 'requirements'
                      ? 'border-b-2 border-school-primary text-school-primary bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Requirements
                </button>
                <button
                  onClick={() => setActiveTab('fees')}
                  className={`px-8 py-4 text-sm font-medium ${
                    activeTab === 'fees'
                      ? 'border-b-2 border-school-primary text-school-primary bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Fee Structure
                </button>
                <button
                  onClick={() => setActiveTab('scholarships')}
                  className={`px-8 py-4 text-sm font-medium ${
                    activeTab === 'scholarships'
                      ? 'border-b-2 border-school-primary text-school-primary bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Scholarships
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'requirements' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h4>
                      <ul className="space-y-3">
                        {requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Important Notes</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• All documents must be original or certified copies</li>
                        <li>• Application forms are available at the school office</li>
                        <li>• Late applications may not be considered</li>
                        <li>• Admission is based on merit and available space</li>
                        <li>• Medical examination must be from a registered clinic</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'fees' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Structure (2024)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-4 border-b border-gray-200 font-semibold">Fee Item</th>
                          <th className="text-right p-4 border-b border-gray-200 font-semibold">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feeStructure.map((fee, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="p-4">{fee.item}</td>
                            <td className="p-4 text-right font-medium">{fee.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> Fees are subject to review annually. Payment plans are available for families who need them.
                      Please contact the administration office for more information.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'scholarships' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Scholarship Programs</h3>
                  <div className="grid gap-6">
                    {scholarships.map((scholarship, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{scholarship.name}</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Criteria:</span>
                            <p className="text-gray-600">{scholarship.criteria}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Benefit:</span>
                            <p className="text-gray-600">{scholarship.benefit}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Duration:</span>
                            <p className="text-gray-600">{scholarship.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Application */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Apply?</h3>
              <p className="text-gray-600 mb-8">
                Take the first step towards an excellent education. Download our application form 
                or visit us to learn more about joining our school community.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-school-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Application Form
                </button>
                
                <button className="w-full border-2 border-school-primary text-school-primary px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  Schedule a School Visit
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Admissions Office</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-school-primary" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-600">+254 712 345 678</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-school-primary" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">admissions@kahatiasecondary.ac.ke</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-school-primary" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-gray-600">Kahatia Secondary School<br />P.O. Box 123, Kahatia<br />Eastern Province, Kenya</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-school-primary" />
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 8:00 AM - 12:00 PM</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
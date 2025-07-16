import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Camera, Users, Trophy, BookOpen } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Camera },
    { id: 'academic', name: 'Academic', icon: BookOpen },
    { id: 'sports', name: 'Sports', icon: Trophy },
    { id: 'events', name: 'Events', icon: Users }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Modern Science Laboratory',
      category: 'academic',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Students conducting experiments in our state-of-the-art chemistry lab'
    },
    {
      id: 2,
      title: 'Computer Studies Class',
      category: 'academic',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Students learning programming and digital literacy skills'
    },
    {
      id: 3,
      title: 'School Library',
      category: 'academic',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Students studying in our well-equipped library with over 5,000 books'
    },
    {
      id: 4,
      title: 'Football Team Victory',
      category: 'sports',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Our football team celebrating their regional championship win'
    },
    {
      id: 5,
      title: 'Athletics Training',
      category: 'sports',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Students training for the upcoming regional athletics competition'
    },
    {
      id: 6,
      title: 'Annual Science Fair',
      category: 'events',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Students presenting their innovative science projects'
    },
    {
      id: 7,
      title: 'Graduation Ceremony 2023',
      category: 'events',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Class of 2023 graduation ceremony celebration'
    },
    {
      id: 8,
      title: 'Cultural Day Performance',
      category: 'events',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1514782831304-632d44ac38d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Students showcasing traditional dances during cultural day'
    },
    {
      id: 9,
      title: 'Mathematics Class',
      category: 'academic',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Interactive mathematics lesson in our modern classroom'
    },
    {
      id: 10,
      title: 'School Band Performance',
      category: 'events',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Our talented school band performing at the annual music festival'
    },
    {
      id: 11,
      title: 'Volleyball Champions',
      category: 'sports',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Girls volleyball team with their county championship trophy'
    },
    {
      id: 12,
      title: 'Art Exhibition',
      category: 'academic',
      type: 'image',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Student artwork displayed during the annual art exhibition'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">School Gallery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore the vibrant life at Kahatia Secondary School through our photo gallery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-school-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg card-hover cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    ) : (
                      <Camera className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                  {item.type === 'video' && (
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white p-1 rounded">
                      <Play className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* School Achievements Display */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recent Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating our students' achievements and memorable moments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-school-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regional Champions</h3>
              <p className="text-gray-600">Our football and volleyball teams won regional championships in 2023</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-school-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Excellence</h3>
              <p className="text-gray-600">Top 10 in regional KCSE rankings with 98% pass rate in 2023</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Impact</h3>
              <p className="text-gray-600">Outstanding community service award for environmental conservation projects</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 bg-school-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Want to See More?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Schedule a visit to experience our school firsthand and meet our community
            </p>
            <button className="bg-white text-school-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Schedule a Visit
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
import React from 'react';
import VideoSection from '../AboutUs/AboutComponents/VideoSection';
import FeatureSection from '../AboutUs/AboutComponents/FeatureSection';
import HistorySection from '../AboutUs/AboutComponents/HistorySection';
import CallToAction from '../AboutUs/AboutComponents/CallToAction';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section 
    id='about'
    className="relative py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Elegant Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl bg-gradient-to-r from-chedar to-chedarlow bg-clip-text text-transparent font-play mb-4 tracking-wide">¿Quiénes somos?</h2>
          <div className="w-20 h-1 bg-verde mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-avenir leading-relaxed">
            Herederos de una tradición quesera que fusiona técnicas artesanales con la más alta calidad para traer a su mesa lo mejor de nuestra tierra.
          </p>
        </motion.div>

        {/* Hero Video */}
        <VideoSection />

        {/* History Section */}
        <HistorySection />

        {/* Features */}
        <FeatureSection />

        {/* Call to Action */}
        <CallToAction />

       
      </div>
    </section>
  );
};

export default AboutSection;
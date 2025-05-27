import React from 'react';
import VideoSection from './InformationComponents/VideoSection';
import CallToAction from './InformationComponents/CallToAction';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section 
    id='about'
    className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Hero Video */}
        <VideoSection />

        {/* Call to Action */}

       
      </div>
        <CallToAction />
    </section>
  );
};

export default AboutSection;
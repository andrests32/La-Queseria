import React from 'react';
import VideoSection from './InformationComponents/VideoSection';
import CallToAction from './InformationComponents/CallToAction';

const AboutSection = () => {
  return (
    <div 
    className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Video */}
        <VideoSection />
        {/* Call to Action */}
      </div>
        <CallToAction />
    </div>
  );
};

export default AboutSection;
import React from 'react'

import HeroSection from "../components/HeroSection/HeroSection";
import FeatureSection from '../components/FeatureSection/FeatureSection';
import SimSection from '../components/SimSection/SimSection';
import RoboSection from '../components/RoboSection/RoboSection';
import FaqSection from '../components/FaqSection/FaqSection';
import ThreeStepSection from '../components/ThreeStepSection/ThreeStepSection';
import ReadySection from '../components/ReadySection/ReadySection';


const Home = () => {
  return (
    <div>
      {/* <NavbarComp btnVisible="block" /> */}
      <HeroSection />
      <FeatureSection />
      <SimSection />
      <RoboSection />
      <FaqSection />
      <ThreeStepSection />
      <ReadySection />
      {/* <FooterSection /> */}
    </div>
  )
}

export default Home
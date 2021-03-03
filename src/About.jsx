/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

function About({ isVisible }) {
  return (
    <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>Hellow</motion.div>
  );
}

export default About;

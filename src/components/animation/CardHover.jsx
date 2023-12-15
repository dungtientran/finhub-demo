import React from 'react';

import { motion } from 'framer-motion';

const CardHover = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );
};

export default CardHover;

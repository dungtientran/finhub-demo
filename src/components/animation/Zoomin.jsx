import React from 'react';

import { motion } from 'framer-motion';

const ZoomIn = ({ children, duration = 0.5, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ZoomIn;

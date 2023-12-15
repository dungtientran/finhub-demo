import React from 'react';


import { motion } from 'framer-motion';

const FadeIn = ({ children, duration = 0.5, isLeft = true, delay = 0.5, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateX: isLeft ? -20 : 20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};


export default FadeIn;

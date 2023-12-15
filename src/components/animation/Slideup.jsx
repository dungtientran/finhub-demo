import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Slideup = ({ children, duration, isUp = true, distance = 50, className, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: isUp ? distance : -distance }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: duration ? duration : 0.8, delay: delay ? delay : 0 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
// Slideup.propTypes = {
//     children: PropTypes.node.isRequired,
//     duration: PropTypes.number,
//     isUp: PropTypes.bool,
//     distance: PropTypes.number,
//   };
export default Slideup

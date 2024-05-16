"use client"
import { motion } from 'framer-motion';
import './card.css';

const ThirdCard = () => {
  return (
    <motion.div 
      className="sec-card third-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='parent third-parent'>
        <div className='text text-right'>
          <span>
            <strong>Track your net worth</strong>
            <br />
            automatically and spend less time managing your personal finances.
            <br />
            No need to update spreadsheets
            <br />
            manually anymore.
          </span>
        </div>
        <div className='right-cards'>
          <motion.img
            src="/Account Types Card.png"
            className='account-types'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            src="Accounts card.png"
            className='accounts'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.img
            src="Brokers Card.png"
            className='brokers'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ThirdCard;

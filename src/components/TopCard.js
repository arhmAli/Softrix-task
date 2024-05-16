"use client"
import { motion } from 'framer-motion';
import Image from "next/image";
import './card.css';

const TopCard = () => {
  return (
    <motion.div 
      className="parent-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          className="face-img"
          src="/Faces.png"
          alt="Faces"
        />
      </motion.div>
      <motion.div
        className="child"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img
          src='/qr_code.png'
          className="bordered-img"
          alt="QR Code"
        />
        <h3>Sign Up</h3>
      </motion.div>
      <motion.img
        src="/Illistration.png"
        className="illistration-img"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        alt="Illustration"
      />
      <motion.div
        className="text-pic-div"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="text-div">
          <strong>Sign up today</strong> and manage your
          <br />
          portfolio like a pro with personalized
          <br />
          assistant and access to a trusted tech 
          <br />
          community of 1,200 members who 
          <br />
          connected $150M+ of total assets.
        </div>
      </motion.div>
    </motion.div>
  );
}

export default TopCard;

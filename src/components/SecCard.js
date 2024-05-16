"use client"
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './card.css';

const SecCard = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  if (inView) {
    controls.start('visible');
  }

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <div className="sec-card">
      <div className='parent'>
        <motion.div
          className='text'
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={leftVariants}
        >
          <span>
            <strong>Connect your brokerage accounts </strong>
            <br />
            and get access to trading ideas,
            <br />
            aggregated stats and discussions in
            <br />
            your tech investing community right
            away.
          </span>
        </motion.div>
        <div className='cards'>
          <motion.img
            src='/Googlers Group.png'
            className='google'
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={rightVariants}
          />
          <motion.img
            src="/StockClubs Group.png"
            className='stock'
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={rightVariants}
            transition={{ delay: 0.2 }}
          />
          <motion.img
            src="/Amazonians Group.png"
            className='amazon'
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={rightVariants}
            transition={{ delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}

export default SecCard;

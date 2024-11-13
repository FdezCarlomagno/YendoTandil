import { motion } from 'framer-motion';

function PaperPlane() {
  return (
    <motion.div
      className="fixed top-1/4 -right-20 z-50 transform -rotate-12"
      animate={{
        x: [-100, window.innerWidth + 100],
        y: [0, -50, 0],
      }}
      transition={{
        duration: 8,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 15
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent"
      >
        <path
          d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071C10.9024 12.3166 10.9024 11.6834 11.2929 11.2929L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289Z"
          fill="currentColor"
        />
        <path
          d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L12 10.5858L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  );
}

export default PaperPlane;
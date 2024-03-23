import { motion } from 'framer-motion';
import { CSSProperties } from 'styled-components';

interface MotionButtonProps {
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
  className?: string;
}

const MotionButton = ({ children, style, onClick, className }: MotionButtonProps) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.15 }}
    style={style}
    onClick={onClick}
    className={className}
  >
    {children}
  </motion.button>
);

export default MotionButton;

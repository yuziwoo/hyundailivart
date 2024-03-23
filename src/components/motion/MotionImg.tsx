import { motion } from 'framer-motion';

interface MotionImgProps {
  src: string;
  alt?: string;
}

const MotionImg = ({ src, alt = '이미지' }: MotionImgProps) => {
  /**
   * 이미지를 탭하면 이미지의 scale이 커집니다.
   */

  return (
    <div style={{ width: '100%', overflow: 'hidden', cursor: 'pointer' }}>
      <motion.img
        src={src}
        alt={alt}
        style={{ width: '100%', display: 'block' }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default MotionImg;

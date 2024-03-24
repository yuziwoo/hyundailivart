import { useCallback, useEffect, useState } from 'react';
import { theme } from '../../../../styles/theme';

const HeaderBackground = () => {
  const SCROLL_EVENT_RANGE = 120;
  const MAXIMUM_OPACITY = 1;
  const step = SCROLL_EVENT_RANGE / MAXIMUM_OPACITY;
  const initialOpacity = -document.body.getBoundingClientRect().top / step;

  const [opacity, setOpacity] = useState(initialOpacity);

  const handleChangeBlur = useCallback(() => {
    const posY = -document.body.getBoundingClientRect().top;

    if (posY <= SCROLL_EVENT_RANGE) {
      setOpacity(posY / step);
      return;
    }

    // 최대값을 넘긴 경우
    if (opacity !== MAXIMUM_OPACITY) {
      setOpacity(MAXIMUM_OPACITY);
    }
  }, [opacity, step]);

  useEffect(() => {
    handleChangeBlur();
    window.addEventListener('scroll', handleChangeBlur);

    return () => {
      window.removeEventListener('scroll', handleChangeBlur);
    };
  }, [handleChangeBlur]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: theme.color.BLACK,
        transition: 'opacity 0.3s',
        opacity: opacity,
      }}
    ></div>
  );
};

export default HeaderBackground;

import { useEffect, useState } from 'react';
import { elementId } from '../../../../constants/elementId';

const debounce = (func: () => void, delay: number) => {
  let timer: NodeJS.Timeout | undefined;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func();
    }, delay);
  };
};

const RelatedHeaderHeight = () => {
  const INITIAL_HEIGHT = 100;
  const [height, setHeight] = useState<number>(INITIAL_HEIGHT);

  const onResize = () => {
    const newHeight = document.getElementById(elementId.HEADER)?.offsetHeight;

    if (newHeight !== undefined) {
      setHeight(newHeight);
      return;
    }

    setHeight(INITIAL_HEIGHT);
  };

  const debouncedResize = debounce(onResize, 250);

  useEffect(() => {
    window.addEventListener('resize', debouncedResize);

    onResize();
    setTimeout(() => {
      onResize();
    }, 100);

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [debouncedResize]);

  return <div style={{ height: `${height}px` }}></div>;
};

export default RelatedHeaderHeight;

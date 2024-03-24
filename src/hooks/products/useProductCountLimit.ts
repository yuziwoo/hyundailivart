import { useCallback, useEffect, useState } from 'react';

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

export const useProductCountLimit = () => {
  const MAX_PRODUCT_COUNT = 10;
  const MIN_PRODUCT_COUNT = 2;
  const THRESHOLD = 860;
  const initialProductCount = window.innerWidth > THRESHOLD ? MAX_PRODUCT_COUNT : MIN_PRODUCT_COUNT;

  const [productCount, setProductCount] = useState(initialProductCount);
  const [theme, setTheme] = useState<'pc' | 'mob'>(window.innerWidth > THRESHOLD ? 'pc' : 'mob');

  const onResize = () => {
    if (window.innerWidth > THRESHOLD) {
      setProductCount(10);
      setTheme('pc');
      return;
    }

    if (theme === 'mob') return;
    setTheme('mob');
    setProductCount(MIN_PRODUCT_COUNT);
  };

  const debouncedResize = debounce(onResize, 250);

  useEffect(() => {
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [debouncedResize]);

  const increaseCount = useCallback(() => {
    setProductCount((prevCount) => {
      const newCount = prevCount + 2;
      return newCount > MAX_PRODUCT_COUNT ? MAX_PRODUCT_COUNT : newCount;
    });
  }, []);

  return { productCount, increaseCount };
};

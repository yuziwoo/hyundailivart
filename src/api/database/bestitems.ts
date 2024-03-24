import { ProductGroupProps } from '../../types/products';
import { Http } from '../http';

/**
 * best items를 가져오는 api
 */

export const getBestItems = async () => {
  const data = await Http.getWithoutClient<ProductGroupProps[]>('https://yuziwoo.github.io/hyundailivart/mock/bestItems.json');

  return data;
};

/**
 * best items를 가져오는 api
 */

import { ProductGroupProps } from '../../types/products';
import { Http } from '../http';

export const getBestItems = async () => {
  const data = await Http.getWithoutClient<ProductGroupProps[]>('../mock/bestItems.json');

  return data;
};

import { RecommendedProductGroupProps } from '../../types/products';
import { Http } from '../http';

/**
 * 메인페이지의 추천 아이템 데이터를 가져옵니다.
 */

export const getRecommendedItems = async () => {
  const data = await Http.getWithoutClient<RecommendedProductGroupProps[]>(
    'https://yuziwoo.github.io/hyundailivart/mock/recommendedItems.json'
  );

  return data;
};

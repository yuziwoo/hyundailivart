import { useQuery } from '@tanstack/react-query';
import { queryAPI } from '../../constants/query';
import { RecommendedProductGroupProps } from '../../types/products';
import { getRecommendedItems } from '../../api/database/recommendedItems';

export const useRecommendedItems = () => {
  const queryKey = [queryAPI.queryKey.recommendedItems];

  const recommendedItemsQuery = useQuery<RecommendedProductGroupProps[] | undefined>({
    queryKey,
    queryFn: async () => {
      const result = await getRecommendedItems().then((res) => res.data);

      if (Array.isArray(result)) return result;
      return undefined;
    },
  });

  return { recommendedItemsQuery };
};

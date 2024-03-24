import { useQuery } from '@tanstack/react-query';
import { queryAPI } from '../../constants/query';
import { ProductGroupProps } from '../../types/products';
import { getBestItems } from '../../api/database/bestitems';

export const useBestItems = () => {
  const queryKey = [queryAPI.queryKey.bestItems];

  const bestItemsQuery = useQuery<ProductGroupProps[] | undefined>({
    queryKey,
    queryFn: async () => {
      const result = await getBestItems().then((res) => res.data);

      if (Array.isArray(result)) return result;
      return undefined;
    },
  });

  return { bestItemsQuery };
};

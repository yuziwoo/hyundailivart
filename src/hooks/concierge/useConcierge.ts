import { useQuery } from '@tanstack/react-query';
import { queryAPI } from '../../constants/query';
import { ConciergeDataProps } from '../../types/concierge';
import { getConciergeData } from '../../api/database/concierge';

export const useConcierge = () => {
  const queryKey = [queryAPI.queryKey.concierge];

  const conciergeQuery = useQuery<ConciergeDataProps[] | undefined>({
    queryKey,
    queryFn: async () => {
      const result = await getConciergeData().then((res) => res.data);

      if (Array.isArray(result)) return result;
      return undefined;
    },
  });

  return { conciergeQuery };
};

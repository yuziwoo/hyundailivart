import { useQuery } from '@tanstack/react-query';
import { queryAPI } from '../../constants/query';
import { MainBannerAPIProps } from '../../types/mainBanner';
import { getMainBannerData } from '../../api/database/mainbanner';

export const useMainBanner = () => {
  const queryKey = [queryAPI.queryKey.mainBanner];

  const mainBannerQuery = useQuery<MainBannerAPIProps[] | undefined>({
    queryKey,
    queryFn: async () => {
      const result = await getMainBannerData().then((res) => res.data);
      
      if (Array.isArray(result)) return result;
      return undefined;
    },
  });

  return { mainBannerQuery };
};

import { MainBannerAPIProps } from '../../types/mainBanner';
import { Http } from '../http';

/**
 * mainbanner 데이터를 가져오는 api
 */

export const getMainBannerData = async () => {
  const data = await Http.getWithoutClient<MainBannerAPIProps[]>('../mock/mainBanner.json');

  return data;
};

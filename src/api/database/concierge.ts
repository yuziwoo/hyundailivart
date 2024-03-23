import { ConciergeDataProps } from '../../types/concierge';
import { Http } from '../http';

/**
 * concierge 데이터를 가져오는 api
 */

export const getConciergeData = async () => {
  const data = await Http.getWithoutClient<ConciergeDataProps[]>('../mock/concierge.json');

  return data;
};

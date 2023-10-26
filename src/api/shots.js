import { handleApiError } from '../utils/helpers';
import shotData from './data/shotsNine.json';

export const getShots = async () => {

  //This would be set up as an axios other REST api style call, with a try catch block likely, but is just returning the data for now
  //assuming this is something that is run in conjunction with a round being played real time, it would be pertinent to have some kind of auto update
  //polling would work, but is network intensive. Ideally youd set up some kind of web socket connection for real time updates.
  try {
    const response = shotData;
    return response;
  } catch (error) {
    return handleApiError(error);
  }
};


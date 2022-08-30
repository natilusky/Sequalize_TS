import * as service from '../../../db/service/FeedService'


export const getDetails = async (id: string): Promise<any> => {
  return await service.getDetails(id)
}


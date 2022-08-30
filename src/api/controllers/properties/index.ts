import * as service from '../../../db/service/PropertyService'



export const getDetails = async (id: string): Promise<any> => {
  return await service.getDetails(id)
}


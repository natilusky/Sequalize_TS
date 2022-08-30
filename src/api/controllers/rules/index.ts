import * as service from '../../../db/service/RuleService'


export const getDetails = async (id: string): Promise<any> => {
  return await service.getDetails(id)
}


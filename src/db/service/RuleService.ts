import * as RuleDal from '../dal/rule'


export const getDetails = (id: string): Promise<any> => {
    return RuleDal.getDetails(id)
}

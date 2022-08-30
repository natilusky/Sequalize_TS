import * as PropertyDal from '../dal/Property'


export const getDetails = (id: string): Promise<any> => {
    return PropertyDal.getDetails(id)
}

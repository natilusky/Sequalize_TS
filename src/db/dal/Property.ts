import { Properties } from '../models'


export const getDetails = async (id: string): Promise<any> => {
    const pro = Properties.findByPk(id)
    if (!pro) {
        throw new Error('not found')
    }
    return pro
}

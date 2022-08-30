import { SetRules, Rules } from '../models'


export const getDetails = async (id: string): Promise<any> => {
    const pro = SetRules.findByPk(id, { include: Rules })
    if (!pro) {
        throw new Error('not found')
    }
    return pro
}

import { Feeds, Users, Properties } from '../models'


export const getDetails = async (id: string): Promise<any> => {
    const pro = Feeds.findByPk(id, {include: [Users, Properties]})

    if (!pro) {
        throw new Error('not found')
    }
    return pro
}

import * as FeedDal from '../dal/feed'


export const getDetails = (id: string): Promise<any> => {
    return FeedDal.getDetails(id)
}

import {  Users,} from '../models'
import { UserInput, UserOutput } from '../models/Users'

export const create = async (payload: UserInput): Promise<UserOutput> => {
    return Users.create(payload)
}

import { Users } from '../../interfaces'
import { UserOutput } from '../../../db/models/Users'

export const toUser = (Users: UserOutput): Users => {
    return {
        userId: Users.userId,
        email: Users.email,
    }
}
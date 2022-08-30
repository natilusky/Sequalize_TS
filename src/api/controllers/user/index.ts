import { UserInput } from '../../../db/models/Users'
import * as service from '../../../db/service/UserService'
import { CreateUserDTO } from '../../dto/user.dto'
import { Users } from '../../interfaces'
import * as mapper from './mapper'

export const create = async (payload: CreateUserDTO): Promise<Users> => {
    return mapper.toUser(await service.create(payload))
}

import { Optional } from "sequelize/types";

export type CreateUserDTO = {
    userId?: string;
    email: string;
    password: string;
}


export type UpdateUserDTO = Optional<CreateUserDTO, 'email'>

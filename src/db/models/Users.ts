import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface UserAttributes {
    userId: string;
    email: string;
    password: string;
}

export interface UserInput extends Optional<UserAttributes, 'userId' > {}

export interface UserOutput extends Required<UserAttributes> {}

class Users extends Model<UserAttributes, UserInput> implements UserAttributes {
    declare userId: string
    declare email: string;
    declare password: string;
}

Users.init({
    userId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: sequelizeConnection,
    paranoid: false,
    timestamps: false
})


export default Users
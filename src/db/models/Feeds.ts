import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

import { Users } from '.'


interface FeedsAttributes {
    feedId: string;
    feed_name: string;
}

export interface FeedsInput extends Optional<FeedsAttributes, 'feed_name' > { }

export interface FeedsOutput extends FeedsInput { }

class Feeds extends Model<FeedsAttributes, FeedsInput> implements FeedsAttributes {
    declare feedId: string;
    declare feed_name: string;
}

Feeds.init({
    feedId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    feed_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelizeConnection,
    paranoid: false,
    // freezeTableName: true,
    timestamps: false
})

Users.hasMany(Feeds)
Feeds.belongsTo(Users)

export default Feeds
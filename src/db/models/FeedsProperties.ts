import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

import { Feeds, Properties } from '.'

interface FeedsPropertiesAttributes {
    id: number;
}

export interface FeedsPropertiesInput extends Optional<FeedsPropertiesAttributes, 'id'> {}
export interface FeedsPropertiesOutput extends FeedsPropertiesInput {}

class FeedsProperties extends Model<FeedsPropertiesAttributes, FeedsPropertiesInput> implements FeedsPropertiesAttributes {
    declare id: number;
}

FeedsProperties.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    }
}, {
    sequelize: sequelizeConnection,
    paranoid: false,
    // freezeTableName: true,
    timestamps: false
})

Feeds.belongsToMany(Properties, { through: FeedsProperties })
Properties.belongsToMany(Feeds, { through: FeedsProperties })

export default FeedsProperties
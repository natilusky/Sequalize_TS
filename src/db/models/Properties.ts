import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface PropertiesAttributes {
    propertyId: string;
    property_name: string;
    property_type: string;
}

export interface PropertiesInput extends Optional<PropertiesAttributes, 'property_name' | 'property_type'> { }

export interface PropertiesOutput extends Required<PropertiesAttributes> { }

class Properties extends Model<PropertiesAttributes, PropertiesInput> implements PropertiesAttributes {
    declare propertyId: string
    declare property_name: string;
    declare property_type: string;
}

Properties.init({
    propertyId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    property_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    property_type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelizeConnection,
    paranoid: false,
    timestamps: false
})

export default Properties
import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

import { SetRules, Properties, Feeds } from '.'

interface RulesAttributes {
    ruleId: string;
    operator: string;
    value: string;
    and_or: boolean;
    scope: string;
}

export interface RulesInput extends Optional<RulesAttributes, 'operator'> { }

export interface RulesOutput extends RulesInput { }

class Rules extends Model<RulesAttributes, RulesInput> implements RulesAttributes {
    declare ruleId: string;
    declare operator: string;
    declare value: string;
    declare and_or: boolean;
    declare scope: string;
}

Rules.init({
    ruleId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    operator: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    },
    and_or: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    scope: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize: sequelizeConnection,
    paranoid: false,
    // freezeTableName: true,
    timestamps: false
})



Feeds.hasMany(Rules)
Rules.belongsTo(Feeds)

Properties.hasMany(Rules)
Rules.belongsTo(Properties)

SetRules.hasMany(Rules)
Rules.belongsTo(SetRules)


export default Rules
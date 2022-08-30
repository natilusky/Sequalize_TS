import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface SetRulesAttributes {
    setRuleId: string;
    set_rule_name: string;
}

export interface SetRulesInput extends Optional<SetRulesAttributes, 'set_rule_name' > {}

export interface SetRulesOutput extends Required<SetRulesAttributes> {}

class SetRules extends Model<SetRulesAttributes, SetRulesInput> implements SetRulesAttributes {
    declare setRuleId: string
    declare set_rule_name: string
}

SetRules.init({
    setRuleId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    set_rule_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelizeConnection,
    paranoid: false,
    timestamps: false
})

export default SetRules
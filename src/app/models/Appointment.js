import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  // Define as propriedados do modelo
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          field: 'active',
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'createdAt',
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'updatedAt',
        },
      },
      {
        sequelize,
      }
    );

    this.tableName = 'appointment';

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }
}

export default Appointment;

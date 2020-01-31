import Sequelize, { Model } from 'sequelize';

class User extends Model {
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
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'nome',
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'senha',
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

    this.tableName = 'user';

    return this;
  }
}

export default User;

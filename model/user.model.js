module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "user",
    {
      user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      user_email: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      user_pass: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_mob: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      user_address: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return model;
};

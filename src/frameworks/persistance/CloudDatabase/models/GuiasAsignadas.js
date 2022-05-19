module.exports = (sequelize, Sequelize) => {
  const GuiasAsignadas = sequelize.define("GuiasAsignadas", {
    Id: {type: Sequelize.STRING,primaryKey: true},
    FechaAsignacion: Sequelize.DATE,
    IdVehiculo: Sequelize.INTEGER,
    IdEstadoAsignacion: Sequelize.INTEGER,
  });

  return GuiasAsignadas;
};

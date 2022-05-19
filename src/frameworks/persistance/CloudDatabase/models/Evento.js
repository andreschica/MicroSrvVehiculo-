module.exports = (sequelize, Sequelize) => {
  const Evento = sequelize.define("Evento", {
    Id: {type: Sequelize.INTEGER,primaryKey: true},
    FechaHora: Sequelize.DATE,
    TipoEvento: Sequelize.INTEGER,
    Notas: Sequelize.STRING,
    IdVehiculo: Sequelize.INTEGER,
  });

  return Evento;
};
module.exports = (sequelize, Sequelize) => {
  const Vehiculo = sequelize.define("Vehiculo", {
    id: {type: Sequelize.INTEGER,primaryKey: true},
    Nombre: Sequelize.STRING,
    Placa: Sequelize.STRING,
    RutaDefinida: Sequelize.INTEGER,
    EstadoVehiculo: Sequelize.INTEGER
  });

  return Vehiculo;
};
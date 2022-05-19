/* eslint-disable class-methods-use-this */
const Sequelize = require("sequelize");
const VehiculoRepositoryClass = require('./VehiculoRepository');
const GuiaAsignadaRepositoryClass = require('./GuiaAsignadaRepository');
const EventoRepositoryClass = require('./EventoRepository');

const sequelize = new Sequelize( process.env.DB, process.env.USERDB, process.env.PASSWORDDB, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    operatorsAliases: 0,
    logging: false,
    define: {
        timestamps: false,
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    },
    // pool: {max: process.env.POOLMAX,min: process.env.POOLMIN,acquire: process.env.POOLACQUIRE,idle: process.env.POOLIDLE}
  });

  const Vehiculo = require("./models/Vehiculo")(sequelize, Sequelize);
  const GuiasAsignadas = require("./models/GuiasAsignadas")(sequelize, Sequelize);
  const Evento = require("./models/Evento")(sequelize, Sequelize);  
  const VehiculoRepository = VehiculoRepositoryClass(Vehiculo);
  const GuiaAsignadaRepository = GuiaAsignadaRepositoryClass(GuiasAsignadas);
  const EventoRepository = EventoRepositoryClass(Evento);

module.exports = class DatabaseServices {

    constructor() {
        this.vehiculoRepository = new VehiculoRepository();
        this.guiaAsignadaRepository = new GuiaAsignadaRepository();
        this.eventoRepository = new EventoRepository();
    }

    async initDatabase() {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

};

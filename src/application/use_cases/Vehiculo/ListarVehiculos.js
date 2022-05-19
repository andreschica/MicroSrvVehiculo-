//const Vehiculo = require('../../../entities/Vehiculo');
const VehiculoClass = require('../../../entities/Vehiculo');
const Vehiculo = VehiculoClass();

module.exports = (VehiculoRepository) => {

    async function Execute() {
        let vehiculos = await VehiculoRepository.listar();
        return vehiculos;
    }
    return {
        Execute
    };
};

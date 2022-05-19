//const Vehiculo = require('../../../entities/Vehiculo');
const VehiculoClass = require('../../../entities/Vehiculo');
const Vehiculo = VehiculoClass();

module.exports = (VehiculoRepository) => {

    async function Execute(nombre, placa, rutaDefinida) {
        const vehiculo = await VehiculoRepository.obtenerPorPlaca(placa);

        // revisa si el vehiculo ya existe por la placa
        if (vehiculo) {
            throw new Error('Este vehículo ya se encuentra registrado');
        }

        // Crea nuevo objeto de vehiculo
        let nuevoVehiculo = new Vehiculo(nombre, placa, rutaDefinida,1);
        // persiste vehiculo
        nuevoVehiculo = await VehiculoRepository.add(nuevoVehiculo);

        return 'vehiculo agregado con éxito'; //Mirar otra respuesta
    }
    return {
        Execute
    };
};

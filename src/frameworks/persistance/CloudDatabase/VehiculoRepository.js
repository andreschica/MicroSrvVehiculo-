/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
module.exports = (Vehiculo) => {
    return class VehiculoRepository {
        constructor() { }

        async add(instanciaVehiculo) {
            try{
                await Vehiculo.create(instanciaVehiculo);
            }catch(e){
                throw new Error(e);
            }
        }

        async obtenerPorPlaca(placa) {
            try{
                const vehiculoExistente = await Vehiculo.findOne({ where: { Placa: placa } });
                return vehiculoExistente;
            }catch(e){
                throw new Error(e);
            }
        }

        async obtenerPorId(id) {
            try{
                const vehiculoExistente = await Vehiculo.findOne({ where: { Id: id } });
                return vehiculoExistente;
            }catch(e){
                throw new Error(e);
            }
        }

        async actualizarRuta(vehiculo,nuevaRuta) {
            try{
                vehiculo.RutaDefinida = nuevaRuta;
                await vehiculo.save();
                return vehiculo;
            }catch(e){
                throw new Error(e);
            }
        }

        async listar() {
            try{
                const vehiculos = await Vehiculo.findAll();
                return vehiculos;
            }catch(e){
                throw new Error(e);
            }
        }

        async actualizarEstado(vehiculo,nuevoEstado) {
            try{
                vehiculo.EstadoVehiculo = nuevoEstado;
                await vehiculo.save();
                return vehiculo;
            }catch(e){
                throw new Error(e);
            }
        }
        
        async listarPorEstado(idEstado) {
            try{
                const vehiculos = await Vehiculo.findAll({
                    where: {
                        EstadoVehiculo: idEstado
                    }
                });
                return vehiculos;
            }catch(e){
                throw new Error(e);
            }
        }

        async obtenerPorRuta(idRuta) {
            try{
                const vehiculoExistente = await Vehiculo.findOne({ where: { RutaDefinida: idRuta } });
                return vehiculoExistente.dataValues;
            }catch(e){
                throw new Error(e);
            }
        }

    };
}

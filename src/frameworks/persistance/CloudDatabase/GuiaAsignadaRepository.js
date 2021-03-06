/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
module.exports = (GuiaAsignada) => {
    return class GuiaAsignadaRepository {
        constructor() { }

        async add(instanciaGuiaAsignada) {
            try{
                await GuiaAsignada.create(instanciaGuiaAsignada);
            }catch(e){
                throw new Error(e);
            }
        }

        async obtenerPorId(id) {
            try{
                const guiaExistente = await GuiaAsignada.findOne({ where: { Id: id } });
                return guiaExistente;
            }catch(e){
                throw new Error(e);
            }
        }

        async actualizarEstado(guiaExistente,nuevoEstado) {
            try{
                guiaExistente.IdEstadoAsignacion = nuevoEstado;
                await guiaExistente.save();
                return guiaExistente;
            }catch(e){
                throw new Error(e);
            }
        }
        
        async obtenerGuiasActivasVehiculo(idVehicle,unaSola) {
            try{
                let guiasASalir;
                if(unaSola){
                    guiasASalir = await GuiaAsignada.findOne({where:{IdVehiculo:idVehicle,IdEstadoAsignacion:1}});
                    guiasASalir = guiasASalir ?? [];
                }else{
                    guiasASalir = await GuiaAsignada.findAll({where:{IdVehiculo:idVehicle,IdEstadoAsignacion:1}});
                }
                return guiasASalir;
            }catch(e){
                throw new Error(e);
            }
        }

        async contarGuiasVehiculo(idVehicle) {
            try{
                const cuenta = await GuiaAsignada.count({
                    where:{IdVehiculo:idVehicle,IdEstadoAsignacion:1},
                    distinct: 'id'
                  })
                return cuenta;
            }catch(e){
                throw new Error(e);
            }
        }
        
        
        async establecerGuiasSalida(idVehicle) {
            try{
                const guiasASalir = await GuiaAsignada.findAll({where:{IdVehiculo:idVehicle,IdEstadoAsignacion:1}});
                return guiasASalir;
            }catch(e){
                throw new Error(e);
            }
        }

        async asignarPorRuta(idGuia,idVehiculo) {
            try{
                const guiaExistente = await GuiaAsignada.findOne({ where: { Id: idGuia } });
                if(!guiaExistente){
                    let guiaAsignada = {
                        Id: idGuia,
                        FechaAsignacion: new Date(),
                        IdVehiculo: idVehiculo,
                        IdEstadoAsignacion: 1
                    }
                    await GuiaAsignada.create(guiaAsignada);
                }
            }catch(e){
                throw new Error(e);
            }
        }

        
    };
}

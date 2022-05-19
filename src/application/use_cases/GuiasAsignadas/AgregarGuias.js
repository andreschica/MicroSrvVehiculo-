const GuiasAsignadasClass = require('../../../entities/GuiasAsignadas');
const GuiasAsignadas = GuiasAsignadasClass();

module.exports = (GuiasAsignadasRepository) => {

    async function Execute(id,fechaAsignacion,idVehiculo,idEstadoAsignacion) {
        
        const guiaAsignada = await GuiasAsignadasRepository.obtenerPorId(id);
        // revisa si la guia ya esta asignada
        if (guiaAsignada) {
            throw new Error('Esta guia ya se encuentra asignada a un vehículo');
        }

        // Crea nuevo objeto de guiaAsignada
        let nuevaGuiaAsignada = new GuiasAsignadas(fechaAsignacion,idVehiculo,idEstadoAsignacion,id);
        // persiste guias asignadas
        nuevaGuiaAsignada = await GuiasAsignadasRepository.add(nuevaGuiaAsignada);

        return 'Guia asignada con éxito'; //Mirar otra respuesta
    }
    return {
        Execute
    };
};

const GuiasAsignadasClass = require('../../../entities/GuiasAsignadas');
const GuiasAsignadas = GuiasAsignadasClass();

module.exports = (GuiasAsignadasRepository) => {

    async function Execute(id,nuevoEstadoAsignacion) {
        
        const guiaAsignada = await GuiasAsignadasRepository.obtenerPorId(id);
        
        // Crea nuevo objeto de guiaAsignada
        // let nuevaGuiaAsignada = new GuiasAsignadas(fechaAsignacion,idVehiculo,idEstadoAsignacion,id); // activar para validar reglas de negocio

        // actualiza estado guia asignada
        nuevaGuiaAsignada = await GuiasAsignadasRepository.actualizarEstado(guiaAsignada,nuevoEstadoAsignacion);

        return 'Guia actualizada con éxito'; //Mirar otra respuesta
    }
    return {
        Execute
    };
};

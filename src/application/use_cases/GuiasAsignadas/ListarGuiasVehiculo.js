const EventoClass = require('../../../entities/Evento');
const Evento = EventoClass();

module.exports = (GuiasAsignadasRepository) => {

    async function Execute(idVehicle) {
        const guiasActivas = await GuiasAsignadasRepository.obtenerGuiasActivasVehiculo(idVehicle);
        return guiasActivas; 
    }
    return {
        Execute
    };
};

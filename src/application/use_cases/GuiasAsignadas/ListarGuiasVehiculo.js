const EventoClass = require('../../../entities/Evento');
const Evento = EventoClass();

module.exports = (GuiasAsignadasRepository) => {

    async function Execute(idVehicle,unaSola) {
        const guiasActivas = await GuiasAsignadasRepository.obtenerGuiasActivasVehiculo(idVehicle,unaSola);
        return guiasActivas; 
    }
    return {
        Execute
    };
};

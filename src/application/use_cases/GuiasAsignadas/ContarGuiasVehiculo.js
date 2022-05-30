
module.exports = (GuiasAsignadasRepository) => {

    async function Execute(idVehicle) {
        const guiasActivas = await GuiasAsignadasRepository.contarGuiasVehiculo(idVehicle);
        return guiasActivas; 
    }
    return {
        Execute
    };
};

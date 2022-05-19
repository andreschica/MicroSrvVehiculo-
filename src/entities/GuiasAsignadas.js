"use strict";
module.exports = () => {
    return class GuiasAsignadas {
        constructor(fechaAsignacion, idVehiculo, idEstadoAsignacion, id) {
            this.FechaAsignacion = '';
            this.IdVehiculo = idVehiculo !== null && idVehiculo !== void 0 ? idVehiculo : null;
            this.IdEstadoAsignacion = idEstadoAsignacion !== null && idEstadoAsignacion !== void 0 ? idEstadoAsignacion : null;
            this.Id = id !== null && id !== void 0 ? id : null;
            this.setFechaAsignacion(fechaAsignacion);
            this.setIdVehiculo(idVehiculo);
            this.setIdEstadoAsignacion(idEstadoAsignacion);
        }
        get id() {
            return this.Id;
        }
        get fechaAsignacion() {
            return this.FechaAsignacion;
        }
        get idVehiculo() {
            return this.IdVehiculo;
        }
        get idEstadoAsignacion() {
            return this.IdEstadoAsignacion;
        }

        setFechaAsignacion(fechaAsignacion) {
            if (fechaAsignacion == null)
                throw new Error('La fecha no puede ser nulo');
            this.FechaAsignacion = fechaAsignacion;
        }
        setIdVehiculo(idVehiculo) {
            if (idVehiculo == null)
                throw new Error('El vehículo no puede ser nulo'); // Inyección dependencia validación
            this.IdVehiculo = idVehiculo;
        }
        setIdEstadoAsignacion(idEstadoAsignacion) {
            if (idEstadoAsignacion == null)
                throw new Error('El estado no puede ser nulo');
            this.IdEstadoAsignacion = idEstadoAsignacion;
        }
    };
};

"use strict";
module.exports = () => {
    return class Evento {
        constructor(fechaHora,tipoEvento,notas,idVehiculo,id) {
            this.Id = id !== null && id !== void 0 ? id : null;
            this.FechaHora = ''
            this.TipoEvento =tipoEvento !== null && tipoEvento !== void 0 ? tipoEvento : null;
            this.Notas = ''
            this.IdVehiculo = idVehiculo !== null && idVehiculo !== void 0 ? idVehiculo : null;

            this.setFechaHora(fechaHora);
            this.setTipoEvento(tipoEvento);
            this.setNotas(notas);
            this.setIdVehiculo(idVehiculo);
        }
        get id() {
            return this.Id;
        }
        get fechaHora() {
            return this.FechaHora;
        }
        get tipoEvento() {
            return this.TipoEvento;
        }
        get notas() {
            return this.Notas;
        }
        get idVehiculo() {
            return this.IdVehiculo;
        }

        setFechaHora(fechaHora) {
            if (fechaHora == null)
                throw new Error('La fecha no puede ser nulo');
            this.FechaHora = fechaHora;
        }
        setTipoEvento(tipoEvento) {
            if (tipoEvento == null)
                throw new Error('El tipo de evento no puede ser nulo'); // Inyección dependencia validación
            this.TipoEvento = tipoEvento;
        }
        setNotas(notas) {
            this.Notas = notas;
        }

        setIdVehiculo(idVehiculo) {
            if (idVehiculo == null)
                throw new Error('El vehiculo no puede ser nulo');
            this.IdVehiculo = idVehiculo;
        }
    };
};

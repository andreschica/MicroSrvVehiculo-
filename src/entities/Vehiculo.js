"use strict";
module.exports = () => {
    return class Vehiculo {
        constructor(nombre, placa, rutaDefinida, id, estadoVehiculo) {
            this.Nombre = '';
            this.Placa = '';
            this.RutaDefinida = 0;
            this.Id = id !== null && id !== void 0 ? id : null;
            this.EstadoVehiculo = estadoVehiculo !== null && estadoVehiculo !== void 0 ? estadoVehiculo : 3;
            this.setNombre(nombre);
            this.setPlaca(placa);
            this.setRutaDefinida(rutaDefinida);
            this.setEstadoVehiculo(estadoVehiculo);
        }
        get id() {
            return this.Id;
        }
        get nombre() {
            return this.Nombre;
        }
        get placa() {
            return this.Placa;
        }
        get rutaDefinida() {
            return this.RutaDefinida;
        }
        get estadoVehiculo() {
            return this.EstadoVehiculo;
        }

        setNombre(nombre) {
            this.Nombre = nombre;
        }
        setPlaca(placa) {
            if (placa == null)
                throw new Error('La placa debe tener un formato XXX-999'); // Inyección dependencia validación
            this.Placa = placa;
        }
        setRutaDefinida(rutaDefinida) {
            this.RutaDefinida = rutaDefinida;
        }

        setEstadoVehiculo(estadoVehiculo) {
            this.EstadoVehiculo = estadoVehiculo;
        }
    };
};

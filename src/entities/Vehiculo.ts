module.exports = ()=>{ //dependencia validaciones Validaciones
    return class Vehiculo {
        private _id;
        private _nombre: String = '';
        private _placa: String = '';
        private _rutaDefinida: Number = 0;

        get id() {
            return this._id;
        }

        get nombre() {
            return this._nombre;
        }

        get placa() {
            return this._placa;
        }

        get rutaDefinida() {
            return this._rutaDefinida;
        }

        constructor(nombre: String, placa: String, rutaDefinida: Number,id?: Number);
        constructor(nombre: String, placa: String, rutaDefinida: Number,id:Number) {
            this._id = id ?? null;
            this.setNombre(nombre);
            this.setPlaca(placa);
            this.setRutaDefinida(rutaDefinida);
        }

        setNombre(nombre: String){
            this._nombre = nombre;
        }

        setPlaca(placa: String){
            if(placa == null)throw new Error('La placa debe tener un formato XXX-999');// Inyección dependencia validación
            this._placa = placa;
        }

        setRutaDefinida(rutaDefinida: Number){
            this._rutaDefinida = rutaDefinida;
        }
    }
}
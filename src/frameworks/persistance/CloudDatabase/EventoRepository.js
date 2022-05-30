/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
module.exports = (Evento) => {
    return class EventoRepository {
        constructor() { }

        async add(instanciaEvento,t) {
            try{
                if(t){
                    await Evento.create(instanciaEvento, { transaction: t });
                }else{
                    await Evento.create(instanciaEvento);
                }
            }catch(e){
                throw new Error(e);
            }
        }
       
    };
}

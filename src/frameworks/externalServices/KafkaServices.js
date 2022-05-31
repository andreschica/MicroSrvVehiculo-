/* eslint-disable class-methods-use-this */
const { Kafka } = require('kafkajs')

// const kafka = new Kafka({
//     clientId: 'microVehicles',
//     brokers: [process.env.KAFKAHOST]
//   });

  const kafka = new Kafka({
    clientId: 'microVehicles',
    brokers: [process.env.KAFKAHOST],
    ssl: true,
    logLevel: 2,
    sasl: {
      mechanism: 'plain',
      username: process.env.KAFKAUSER,
      password: process.env.KAFKAKEY
    }
  })

  const producer = kafka.producer();

module.exports = class KafkaServices {

    async notify(guiasActivas) {
        await producer.connect();
        const idGuias = guiasActivas.map(x=>x.Id)
        await producer.send({topic: 'salidaGuias',messages: [{ value: JSON.stringify(idGuias)}]});
        await producer.disconnect();
    }

    consumeGuiasEntregadas = async (guiaAsignadaRepository)=> {
        const consumer = kafka.consumer({ groupId: 'jevv' });
        await consumer.connect()
        await consumer.subscribe({ topic:'guide-updated', fromBeginning: true });
        
        await consumer.run({
            eachMessage: async ({ message  }) => {
                try{
                    var guia = await guiaAsignadaRepository.obtenerPorId(JSON.parse(message.value.toString()).id);
                    // console.log(guia);
                    // console.log(JSON.parse(message.value.toString()).id);
                    if(guia)
                    await guiaAsignadaRepository.actualizarEstado(guia,JSON.parse(message.value.toString()).status);
                }catch(ex){
                    console.log(ex);
                }
            },
        })
    }

    consumeAsignacionGuias = async (guiaAsignadaRepository,vehiculoRepository)=> {
        const consumer = kafka.consumer({ groupId: 'jav' });
        await consumer.connect()
        await consumer.subscribe({ topic:'assigned-route', fromBeginning: true });
        
        await consumer.run({
            eachMessage: async ({ message  }) => {
                try{
                    const vehiculoDeRuta = await vehiculoRepository.obtenerPorRuta(JSON.parse(message.value.toString()).assigned_route);
                    await guiaAsignadaRepository.asignarPorRuta(JSON.parse(message.value.toString()).id,vehiculoDeRuta.id);
                    await vehiculoRepository.actualizarEstado(vehiculoDeRuta,2);
                }catch(ex){
                    console.log(ex);
                }
            },
        })
    }

};

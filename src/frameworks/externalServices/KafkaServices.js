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

module.exports = class KafkaServices {

    async notify(guiasActivas) {
        const admin = kafka.admin()
        
        // remember to connect and disconnect when you are donee
        await admin.connect()
        await admin.createTopics({validateOnly: false,waitForLeaders: false,timeout: 5000,
            topics: [{topic: 'salidaGuias'}]
        })
        await admin.disconnect();

        const idGuias = guiasActivas.map(x=>x.Id)
        const producer = kafka.producer();
        await producer.connect();
        console.log(idGuias);
        await producer.send({topic: 'salidaGuias',messages: [{ value: JSON.stringify(idGuias)}]});
        await producer.disconnect();
    }

    consumeGuiasEntregadas = async (guiaAsignadaRepository)=> {
        const consumer = kafka.consumer({ groupId: 'jevv' });
        await consumer.connect()
        await consumer.subscribe({ topic:'guide-updated', fromBeginning: true });
        
        await consumer.run({
            eachMessage: async ({ message  }) => {
                var guia = await guiaAsignadaRepository.obtenerPorId(JSON.parse(message.value.toString()).id);
                await guiaAsignadaRepository.actualizarEstado(guia,JSON.parse(message.value.toString()).status);
            },
        })
    }

    consumeAsignacionGuias = async (guiaAsignadaRepository,vehiculoRepository)=> {
        const consumer = kafka.consumer({ groupId: 'jav' });
        await consumer.connect()
        await consumer.subscribe({ topic:'assigned-route', fromBeginning: true });
        
        await consumer.run({
            eachMessage: async ({ message  }) => {
                const vehiculoDeRuta = await vehiculoRepository.obtenerPorRuta(JSON.parse(message.value.toString()).assigned_route);
                await guiaAsignadaRepository.asignarPorRuta(JSON.parse(message.value.toString()).id,vehiculoDeRuta.id);
                await vehiculoRepository(vehiculoDeRuta,2);
            },
        })
    }

};

const CloudDatabaseServices = require('../frameworks/persistance/CloudDatabase/DatabaseServices');
const KafkaServices = require('../frameworks/externalServices/KafkaServices');

module.exports = (() => {
    return {
        DatabaseService: new CloudDatabaseServices(),
        KafkaService: new KafkaServices()
    };
})();

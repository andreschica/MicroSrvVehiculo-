require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./frameworks/web/routes');
const projectDependencies = require('./config/projectDependencies');
const ErrorHandler = require('./frameworks/common/ErrorHandler');
const swaggerUI = require('swagger-ui-express');
const swaggerOptions = require("./frameworks/common/swaggerOptions.json");
const swaggerJsDoc = require('swagger-jsdoc');


const app = express();
const port = process.env.PORT || 4000;

// load app only if db is alive and kicking
projectDependencies.DatabaseService.initDatabase().then(() => {

    // load middlewares
    app.use(cors());
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    
    // load routes
    app.use('/api', routes(projectDependencies));

    // generic error handler
    app.use(ErrorHandler);

    //documentation
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

    projectDependencies.KafkaService.consumeGuiasEntregadas(projectDependencies.DatabaseService.guiaAsignadaRepository).catch((err) => {
        console.error("error in consumer: ", err)
    })

    projectDependencies.KafkaService.consumeAsignacionGuias(projectDependencies.DatabaseService.guiaAsignadaRepository,projectDependencies.DatabaseService.vehiculoRepository).catch((err) => {
        console.error("error in consumer: ", err)
    })
    

    // eslint-disable-next-line arrow-body-style
    app.listen(port, () => console.log(`http://localhost:${port}`));

}, (err) => {
    console.log(`db is not ready, err:${err}`);
});

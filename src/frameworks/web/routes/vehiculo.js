const express = require('express');
const VehiculoController = require('../../../controllers/VehiculoController');


const vehiculoRouter = (dependencies) => {
    const router = express.Router();

    // load controller with dependencies
    const controller = VehiculoController(dependencies);
    
    /**
     * @swagger
     * /vehicles:
     *      post:
     *          summary: Adds new vehicle
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          required:
     *                              - name
     *                              - licensePlate
     *                              - assignedRoute
     *                          properties:
     *                              name:
     *                                  type: string
     *                              licensePlate:
     *                                  type: string
     *                              assignedRoute:
     *                                  type: integer
     *          responses:
     *              200:
     *                  description: Success
     *              500:
     *                  description: Error
     */
    router.route('/')
        .post(controller.agregarNuevoVehiculo);

    /**
     * @swagger
     * /vehicles:
     *      get:
     *          summary: List vehicles
     *          responses:
     *              200:
     *                  description: Success
     *              500:
     *                  description: Error
     */
    router.route('/')
        .get(controller.listarVehiculos);
    
    /**
     * @swagger
     * /vehicles/vehiclesByStatus/{idStatus}:
     *      get:
     *          summary: List vehicles by status
     *          parameters:
     *              - in: path
     *                name: idStatus
     *                required: true
     *                schema:
     *                  type: integer
     *          responses:
     *              200:
     *                  description: Success
     *              500:
     *                  description: Error
     *              404: not found
     */
    router.route('/vehiclesByStatus/:idStatus')
        .get(controller.listarVehiculosEstado);
    
    /**
     * @swagger
     * /vehicles/SetVehicleRoute:
     *      patch:
     *          summary: update vehicle route
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          required:
     *                              - id
     *                              - assignedRoute
     *                          properties:
     *                              id:
     *                                  type: integer
     *                              assignedRoute:
     *                                  type: integer
     *          responses:
     *              200:
     *                  description: Success
     *              500:
     *                  description: Error
     */
    router.route('/SetVehicleRoute')
        .put(controller.actualizarRutaVehiculo);
    
    // /**
    //  * @swagger
    //  * /vehicles/updateStatus:
    //  *      patch:
    //  *          summary: update vehicle status
    //  *          requestBody:
    //  *              required: true
    //  *              content:
    //  *                  application/json:
    //  *                      schema:
    //  *                          type: object
    //  *                          required:
    //  *                              - id
    //  *                              - assignedRoute
    //  *                          properties:
    //  *                              id:
    //  *                                  type: integer
    //  *                              assignedRoute:
    //  *                                  type: integer
    //  *          responses:
    //  *              200:
    //  *                  description: Success
    //  *              500:
    //  *                  description: Error
    //  */
    // router.route('/updateStatus')
    //     .patch(controller.actualizaEstadoVehiculo);

    return router;
};


module.exports = vehiculoRouter;

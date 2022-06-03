const express = require('express');
const GuiaAsignadaController = require('../../../controllers/GuiaAsignadaController');

const guiaAsignadaRouter = (dependencies) => {
    const router = express.Router();

    // load controller with dependencies
    const controller = GuiaAsignadaController(dependencies);
    
        /**
     * @swagger
     * /assignedGuides:
     *      post:
     *          summary: Assigned guides
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          required:
     *                              - id
     *                              - assignedDate
     *                              - idVehicle
     *                          properties:
     *                              id:
     *                                  type: string
     *                              assignedDate:
     *                                  type: string
     *                                  format: date-time
     *                              idVehicle:
     *                                  type: integer
     *          responses:
     *              200:
     *                  description: Success
     *              500:
     *                  description: Error
     */
    router.route('/')
        .post(controller.agregarNuevaAsignacion);
    
    /**
     * @swagger
     * /assignedGuides/setStatus:
     *      patch:
     *          summary: Assigned guides
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          required:
     *                              - id
     *                              - idStatus
     *                          properties:
     *                              id:
     *                                  type: string
     *                              idStatus:
     *                                  type: integer
     *          responses:
     *              200:
     *                  description: Success
     *              500:
     *                  description: Error
     */
    router.route('/SetStatus')
        .patch(controller.actualizarEstadoAsignacion);

        /**
     * @swagger
     * /assignedGuides/{vehicleId}:
     *      get:
     *          summary: List vehicles by status
     *          parameters:
     *              - in: path
     *                name: vehicleId
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
    router.route('/:idVehicle')
        .get(controller.obtenerGuiasVehiculo);

    router.route('/primera/:idVehicle')
    .get(controller.obtenerGuiasPVehiculo);

    router.route('/count/:idVehicle')
        .get(controller.contarGuiasVehiculo);

    return router;
};


module.exports = guiaAsignadaRouter;

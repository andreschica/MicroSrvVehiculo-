/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - dateTime
 *         - notes
 *         - idVehicle
 *       properties:
 *         dateTime:
 *           type: string
 *           format: date-time
 *         eventTipe:
 *           type: integer
 *         notes:
 *           type: string
 *         idVehicle:
 *           type: integer
 */

const express = require('express');
const EventoController = require('../../../controllers/EventoController');

const eventoRouter = (dependencies) => {
    const router = express.Router();

    // load controller with dependencies
    const controller = EventoController(dependencies);
    
        /**
     * @swagger
     * /event:
     *      post:
     *          summary: Adds new event
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                           $ref: '#/components/schemas/Event'
     *          responses:
     *              200:
     *                  description: Success
     *              500:
     *                  description: Error
     */
    router.route('/')
        .post(controller.agregarEvento);

    /**
     * @swagger
     * /event/packageDelivery:
     *      post:
     *          summary: Trigger vehicle package delivery event
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                           $ref: '#/components/schemas/Event'
     *          responses:
     *              200:
     *                  description: Success
     *              500:
     *                  description: Error
     */
    router.route('/packageDelivery')
        .post(controller.packageDelivery);

    return router;
};


module.exports = eventoRouter;

import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController'
import multer from 'multer';
import multerConfig from './config/multer'
import {celebrate, Joi} from 'celebrate'


const routes = express.Router();
const upload = multer(multerConfig);

const pointsContoller =  new PointsController();
const itemsController = new ItemsController();


routes.get('/items', itemsController.index);

routes.get('/points', pointsContoller.index)
routes.get('/points/:id', pointsContoller.show)

routes.post(
    '/points', 
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),

        })
    },{
            abortEarly: false
        
    }),
    pointsContoller.create)


export default routes;
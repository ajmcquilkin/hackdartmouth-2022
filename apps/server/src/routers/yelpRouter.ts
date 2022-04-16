import express from 'express';
import * as yelpController from '../controllers/yelpController';

const router = express();

router.route("/")
    .post(yelpController.handle_response);

export default router;

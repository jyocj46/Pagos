import {Router} from "express";
import {createSession} from '../controllers/payment.controller.js'

const router = Router();

router.get('/createsession', createSession);
router.get('/success', (req,res) => res.send("¡Compra exitosa! Gracias por la preferencia!"));
router.get('/cancel', (req,res) => res.send("Compra cancelada"));

export default router;
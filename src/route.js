import { Express } from "express";
import { addPaymentGateway } from "./payment-controller";

const router = express.Router();

router.post('/payment', addPaymentGateway);
export default router;
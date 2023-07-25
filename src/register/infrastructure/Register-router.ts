import express from "express";

import { RegisterController } from "./dependencies";
import { PostRegisterController } from "./dependencies";

const RegisterRouter = express.Router();
RegisterRouter.get("/", RegisterController.getAllRegister.bind(RegisterController));
RegisterRouter.post("/", PostRegisterController.createRegister.bind(PostRegisterController));

export { RegisterRouter };

import { Request, Response } from "express";

import { PostRegister } from "../aplication/CreateRegister";

export class CreateRegisterController {
  constructor(private readonly postRegister: PostRegister) {}

  async createRegister(req: Request, res: Response) {
    //const id = req.body.id;
    const distancia = req.body.distancia;
   

    const resultado = await this.postRegister.createRegister(
      //id,
     distancia
      
    );
    console.log("controller", resultado.distancia);
    res
      .status(200)
      .send(
        `La solicitud ${resultado.distancia} fue éxitoso`
      );
  }
}

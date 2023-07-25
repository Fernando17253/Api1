import { CreateRegister } from "../domain/CreateRegister";

export class PostRegister {
  constructor(private readonly addRegister: CreateRegister) {}

  async createRegister(
    //id: string,
    distancia: string,
   
  ) {
    try {
      const Register = await this.addRegister.addRegister(
        //id,
        distancia,
      );
      if (!Register) {
        throw new Error(`Register ${distancia} no se agregado`);
      }
      return Register;
    } catch (error) {
      throw error;
    }
  }
}

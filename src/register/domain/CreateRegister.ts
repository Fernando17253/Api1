import { Register } from "./Register";

export interface CreateRegister {
  addRegister(
    //id: string,
    distancia: string
   
  ): Promise<Register | null>;
}

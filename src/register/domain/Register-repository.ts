import { Register } from "./Register";

export interface RegisterRepository {
  getAll(distancia:string): Promise<Register>;
}

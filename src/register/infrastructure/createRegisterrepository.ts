//import { createPool } from "../../mysql";
import { Register } from "../domain/Register";
import { RegisterRepository } from "../domain/Register-repository";

export class InMemoryRegisterRepository implements RegisterRepository {
  async getAll(distancia: string): Promise<Register> {
    // console.log("Entered InMemoryRegisterRepository getAll");
    // const connection = await createPool();
    // const result: any[] = await connection.query("SELECT * FROM jorge");

    // if (result.length === 0) {
    //   return [];
    // }
    // const Registro: any[] = result[0];
    // console.log(`prueba ${JSON.stringify(Registro)}`);
    // return Registro.map((Register) => {
    //   return new Register(
    //     Register.id,
    //     Register.distancia,
       

    //   );
    // });
    return new Register(distancia);
  }
}

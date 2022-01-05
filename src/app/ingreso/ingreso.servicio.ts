import { Ingreso } from "./ingreso.model";

export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso("Salario", 4000),
    new Ingreso("Venta de coche", 500),
  ];

  eliminar(ingreso: Ingreso) {
    let index = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(index, 1);
  }

  agregar(ingreso: Ingreso) {
    this.ingresos.push(ingreso);
  }
}

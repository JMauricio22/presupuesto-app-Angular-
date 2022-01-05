import { Component } from "@angular/core";
import { Egreso } from "./egreso/egreso.model";
import { EgresoServicio } from "./egreso/egreso.servicio";
import { Ingreso } from "./ingreso/ingreso.model";
import { IngresoServicio } from "./ingreso/ingreso.servicio";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "presupuesto-app";
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(
    private ingresoService: IngresoServicio,
    private egresoService: EgresoServicio
  ) {}

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
  }

  getIngresoTotal() {
    let total =
      this.ingresos.length > 0
        ? this.ingresos
            .map((ingreso) => ingreso.valor)
            .reduce((acc, ingreso) => acc + ingreso, 0)
        : 0;

    return total;
  }

  getEgresoTotal() {
    let total =
      this.egresos.length > 0
        ? this.egresos
            .map((egreso) => egreso.valor)
            .reduce((acc, egreso) => acc + egreso, 0)
        : 0;

    return total;
  }

  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}

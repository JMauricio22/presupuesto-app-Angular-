import { Component, Input, OnInit } from "@angular/core";
import { Egreso } from "./egreso.model";
import { EgresoServicio } from "./egreso.servicio";

@Component({
  selector: "app-egreso",
  templateUrl: "./egreso.component.html",
  styleUrls: ["./egreso.component.css"],
})
export class EgresoComponent implements OnInit {
  @Input() ingresoTotal: number;

  egresos: Egreso[] = [];
  constructor(private egresoServices: EgresoServicio) {}

  ngOnInit(): void {
    this.egresos = this.egresoServices.egresos;
  }

  eliminarRegistro(egreso: Egreso) {
    this.egresoServices.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }
}

import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Egreso } from "../egreso/egreso.model";
import { EgresoServicio } from "../egreso/egreso.servicio";
import { Ingreso } from "../ingreso/ingreso.model";
import { IngresoServicio } from "../ingreso/ingreso.servicio";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent implements OnInit {
  opcion: string = "ing";
  descripcion: string;
  valor: number;

  constructor(
    private ingresoService: IngresoServicio,
    private egresoService: EgresoServicio
  ) {}

  ngOnInit(): void {}

  agregarRegistro(ngForm: NgForm) {
    if (!ngForm.form.valid) {
      return;
    }

    if (this.opcion === "ing") {
      this.ingresoService.agregar(new Ingreso(this.descripcion, this.valor));
    } else {
      this.egresoService.agregar(new Egreso(this.descripcion, this.valor));
    }

    this.limpiarCampos();
  }

  limpiarCampos() {
    this.descripcion = "";
    this.valor = 0;
  }
}

import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-cabecero",
  templateUrl: "./cabecero.component.html",
  styleUrls: ["./cabecero.component.css"],
})
export class CabeceroComponent implements OnInit {
  @Input() ingresos: number;
  @Input() egresos: number;
  @Input() porcentaje: number;
  @Input() presupuesto: number;

  constructor() {}

  ngOnInit(): void {}
}

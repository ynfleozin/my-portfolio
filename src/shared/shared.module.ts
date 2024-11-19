import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "./angular-material/angular-material.module";

@NgModule({
  declarations: [],
  imports: [
    AngularMaterialModule,
  ],
  exports: [
    AngularMaterialModule,
    CommonModule
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";



@NgModule({
  declarations: [],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    CommonModule
  ]
})
export class SharedModule { }

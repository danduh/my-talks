import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Service } from "./service";
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatChipsModule } from "@angular/material/chips";


@NgModule({
  providers: [ Service ],
  declarations: [],
  exports: [
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatChipsModule,
    CommonModule
  ]
})
export class SharedModule {
}

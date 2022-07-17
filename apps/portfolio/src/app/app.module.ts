import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { ComponentsModule } from "./components/components.module";



@NgModule({
  declarations: [ AppComponent ],
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: "enabledBlocking"}),
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent, ],
})
export class AppModule {
}

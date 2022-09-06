import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { TalksComponent } from "./talks/talks.component";
import { ArticlesComponent } from "./articles/articles.component";
import { SharedModule } from "../shared/shared.module";
import { SocialsComponent } from "./socials/socials.component";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { ImagePipe } from "./image.pipe";

@NgModule({
  declarations: [
    ImagePipe,
    HeaderComponent,
    AboutComponent,
    MainComponent,
    FooterComponent,
    TalksComponent,
    ArticlesComponent,
    SocialsComponent,

  ],
  imports: [
    CommonModule, SharedModule, MatButtonModule,
    RouterModule
  ],
  exports: [ HeaderComponent, FooterComponent, MainComponent ],
})
export class ComponentsModule {
}

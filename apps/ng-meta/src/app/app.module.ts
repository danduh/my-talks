import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { StorageModule } from "./services/storageModule";
import { StorageService } from "./services/storage-service";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    // StorageModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    StorageService
    // {
    //   provide: StorageService,
    //   useFactory: () => {
    //     return new StorageService('t');
    //     // return (t?: any) => {
    //     //   console.log('FACTORY', t)
    //     //
    //     // }
    //   },
    //   deps: []
    // }

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

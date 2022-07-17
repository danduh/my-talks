import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { InjectWithConf } from "./decors/decors";
import { StorageService } from "./services/storage-service";

/* eslint-disable */

@Component({
  selector: "my-talks-nx-welcome",
  template: `
    <div>Works</div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  testService2: any;

  constructor(
    @InjectWithConf("someDataElse") private testService: StorageService){
  }

  ngOnInit(){
    this.testService.runMe("someDataElse")
    this.testService2.runMe("someDataElse2")
  }

}

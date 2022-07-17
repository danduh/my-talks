import { Component, Inject, OnInit } from "@angular/core";
import { StorageService } from "./services/storage-service";
import { InjectWithConf } from "./decors/decors";

@Component({
  selector: "my-talks-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ],
})
export class AppComponent implements OnInit {
  testService2: any;

  constructor(
    @InjectWithConf("someData") public testService: StorageService){
  }

  title = "ng-meta";

  ngOnInit(){
    this.testService.runMe("someData")
    this.testService2.runMe("someData2")
  }
}

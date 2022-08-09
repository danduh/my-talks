import { Component, Input, OnInit } from "@angular/core";
import { Video } from "../../types/videos";

@Component({
  selector: 'my-talks-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss'],
})
export class TalksComponent implements OnInit {
  @Input() video!: Video;
  constructor() {}

  ngOnInit(): void {}
}

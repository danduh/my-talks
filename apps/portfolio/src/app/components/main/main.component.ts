import { Component, OnInit } from "@angular/core";
import { Service } from "../../shared/service";
import { map, Observable, shareReplay } from "rxjs";
import { Video } from "../../types/videos";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "my-talks-main",
  templateUrl: "./main.component.html",
  styleUrls: [ "./main.component.scss" ],
})
export class MainComponent implements OnInit {
  cols$: Observable<number> = this.breakpointObserver
    .observe([ Breakpoints.Small, Breakpoints.XSmall ])
    .pipe(
      map((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          return 1;
        } else if (result.breakpoints[Breakpoints.Small]) {
          return 1;
        } else {
          return 1;
        }
      }),
      shareReplay()
    );

  videos!: Observable<Video[]>
  upcomingVideos!: Observable<Video[]>
  blogs!: Observable<Video[]>
  tbds!: Observable<Video[]>

  constructor(private service: Service,
              private breakpointObserver: BreakpointObserver){
  }

  ngOnInit(): void{
    this.videos = this.service.getVideos()
    this.upcomingVideos = this.service.getUpcoming()
    this.blogs = this.service.getBlogs()
    this.tbds = this.service.getTBDs()
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Video } from "../types/videos";
import { environment } from "../../environments/environment";

@Injectable()
export class Service {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient){
  }

  getVideos(): Observable<Video[]>{
    return this.http.get(this.baseUrl + "/assets/data.json")
      .pipe(map((data: any) => data.videos));
  }

  getUpcoming(): Observable<Video[]>{
    return this.http.get(this.baseUrl + "/assets/data.json")
      .pipe(map((data: any) => data.upcomming));
  }
}

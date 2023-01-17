import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = "http://localhost:8080/api/events/";
    return this.http.get(url);
  }
  saveEvent(data: any) {
    return this.http.post("http://localhost:8080/api/events/", data);
  }

  deleteEvent(id: string) {
    return this.http.delete("http://localhost:8080/api/events/" + id);
  }
}

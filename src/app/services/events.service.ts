import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  url: string = 'http://localhost:8080/api/events/';
  constructor(private http: HttpClient) {}

  getEvent() {
    return this.http.get(this.url);
  }
  saveEvent(data: any) {
    return this.http.post(this.url, data);
  }

  deleteEvent(id: string) {
    return this.http.delete(this.url + id);
  }
}

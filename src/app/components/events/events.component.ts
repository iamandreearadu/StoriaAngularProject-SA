import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  myEvents: any = [];

  showAddEventButton: boolean = false;
  toDisplayForm = false;

  public images: Array<any> = [
    {
      image: 'https://source.unsplash.com/random/?wine',
    },
    {
      image: 'https://source.unsplash.com/random/?italia',
    },
    {
      image: 'https://source.unsplash.com/random/?jazz',
    },
    {
      image: 'https://source.unsplash.com/random/?coffee',
    },
    {
      image: 'https://source.unsplash.com/random/?cafe',
    },
    {
      image: 'https://source.unsplash.com/random/?business',
    },
    {
      image: 'https://source.unsplash.com/random/?bohemian',
    },
    {
      image: 'https://source.unsplash.com/random/?party',
    },
    {
      image: 'https://source.unsplash.com/random/?book',
    },
  ];

  constructor(private events: EventsService, private authServ: AuthService) {}

  ngOnInit() {
    this.getEvents();

    this.showAddButton();
  }

  onGetEvents() {
    this.getEvents;
  }

  getEvents() {
    this.events.getEvent().subscribe((data) => {
      console.log(data);
      this.myEvents = data;
    });
  }
  showAddButton() {
    let token = this.authServ.getToken();
    console.log(token);
    if (this.authServ.getToken() === 'ADMIN') {
      this.showAddEventButton = true;
    } else {
      this.showAddEventButton = false;
    }
  }

  showForm() {
    this.toDisplayForm = !this.toDisplayForm;
  }

  onCreateEvent(event: {
    location: string;
    event: string;
    guest: string;
    date: string;
    hour: string;
    duration: number;
    price: number;
    free: boolean;
    phone: number;
  }) {
    this.events.saveEvent(event).subscribe((data) => {
      console.log(data);
      this.myEvents.push(event);
    });
  }

  onDeleteEvent(id: string) {
    this.events.deleteEvent(id).subscribe();
    const index: number = this.myEvents.indexOf(id);

    console.log(index);
    if (index == -1) {
      this.myEvents.splice(index, 1);
    }
    console.log(id);
  }
}

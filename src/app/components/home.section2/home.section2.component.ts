import { Component } from "@angular/core";

@Component({
  selector: "app-home-section2",
  templateUrl: "./home.section2.component.html",
  styleUrls: ["./home.section2.component.css"],
})
export class HomeSection2Component {
  public locations: Array<any> = [
    {
      id: 1,
      image: "../../../assets/LocationLogos/storiafull.png",
      link: "storiaitalia",
    },
    {
      id: 2,
      image: "../../../assets/LocationLogos/storiafullcaffe.png",
      link: "storiacaffe",
    },
    {
      id: 3,
      image: "../../../assets/LocationLogos/storiafullevents.png",
      link: "storiaevents",
    },
  ];
}

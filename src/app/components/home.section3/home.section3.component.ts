import { Component } from "@angular/core";

@Component({
  selector: "app-home-section3",
  templateUrl: "./home.section3.component.html",
  styleUrls: ["./home.section3.component.css"],
})
export class HomeSection3Component {
  partners = [
    "../../../assets/Partners/astoria.png",
    // "../../../assets/Partners/malfy.png",
    "../../../assets/Partners/lavazza.png",
    "../../../assets/Partners/iqos.png",
    "../../../assets/Partners/angustos.png",
  ];
}

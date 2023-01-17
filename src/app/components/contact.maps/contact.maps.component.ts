import { Component } from "@angular/core";

@Component({
  selector: "app-contact-maps",
  templateUrl: "./contact.maps.component.html",
  styleUrls: ["./contact.maps.component.css"],
})
export class ContactMapsComponent {
  public maps: Array<any> = [
    {
      id: 1,
      name: "Storia Italia",
      address: "Str. Lorem ipsum, nr. 32, LOREM",
      tel: 509382447,
      email: "storiaitalia@gmail.com",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.527492317867!2d24.148514550642464!3d45.800693218846405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c6795d4a07b1b%3A0x4697dd7522478145!2sMax!5e0!3m2!1sro!2sro!4v1665472240811!5m2!1sro!2sro",
    },
    {
      id: 2,
      name: "Storia Caffè",
      address: " Str. Lorem ipsum, nr. 32, LOREM",
      tel: 509382447,
      email: "storiaitalia@gmail.com",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10931.009951391434!2d23.5886229!3d46.769775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49dded2676fa71aa!2sSTORIA%20Cucina%20Centrale!5e0!3m2!1sro!2sro!4v1672325902619!5m2!1sro!2sro",
    },
    {
      id: 3,
      name: "Storia Events",
      address: " Str. Lorem ipsum, nr. 32, LOREM",
      tel: 509382447,
      email: "storiaitalia@gmail.com",
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10931.009951391434!2d23.5886229!3d46.769775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49dded2676fa71aa!2sSTORIA%20Cucina%20Centrale!5e0!3m2!1sro!2sro!4v1672325902619!5m2!1sro!2sro",
    },
  ];
}

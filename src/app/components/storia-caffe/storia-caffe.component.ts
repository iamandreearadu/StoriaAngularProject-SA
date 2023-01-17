import { Component } from "@angular/core";

@Component({
  selector: "app-storia-caffe",
  templateUrl: "./storia-caffe.component.html",
  styleUrls: ["./storia-caffe.component.css"],
})
export class StoriaCaffeComponent {
  images = [
    { url: "../../../assets/carousel/coffee.jpg" },
    { url: "../../../assets/carousel/coffee1.jpg" },
    { url: "../../../assets/carousel/coffee2.jpg" },
    { url: "../../../assets/carousel/coffee3.jpg" },
  ];

  currentIndex: number = 0;

  gotoNext(): void {
    const isLastImage = this.currentIndex === this.images.length - 1;
    const newIndex = isLastImage ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }
  gotoPrev(): void {
    const isFirstImage = this.currentIndex === 0;
    const newIndex = isFirstImage ? this.images.length : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  getCurrentSliderUrl(): any {
    return `url("${this.images[this.currentIndex].url}")`;
  }

  imagesUrl = [
    { url: "../../../assets/carousel/coffee.jpg" },
    { url: "../../../assets/carousel/coffee1.jpg" },
    { url: "../../../assets/carousel/coffee2.jpg" },
    { url: "../../../assets/carousel/coffee3.jpg" },
  ];
}

import { Component, OnInit, TemplateRef } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { FormBuilder } from "@angular/forms";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-modal-event",
  templateUrl: "./modal-event.component.html",
  styleUrls: ["./modal-event.component.css"],
})
export class ModalEventComponent implements OnInit {
  eventForm: any;
  public textShow = true;
  constructor(private eventService: BsModalService, private fb: FormBuilder) {}

  modalRef?: BsModalRef;

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      fullname: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})"
        ),
      ]),
      age: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(8),
      ]),
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.eventService.show(template);
  }

  onSubmit() {
    // this.eventForm.reset();
    this.textShow = false;
  }
}

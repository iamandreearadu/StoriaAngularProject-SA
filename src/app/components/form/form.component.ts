import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  title = "ModalForm";
  modalForm: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.modalForm = this.fb.group({
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
      persons: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]),
    });
  }

  onSubmit() {
    console.log(this.modalForm);

    this.modalForm.reset();
  }
}

import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"],
})
export class ContactFormComponent implements OnInit {
  title = "ReactiveForm";
  reactiveForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      firstname: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+$"),
      ]),
      lastname: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+$"),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(8),
      ]),
      subject: new FormControl("", Validators.required),
      message: new FormControl("", [
        Validators.required,
        Validators.minLength(20),
      ]),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.valid);
    this.reactiveForm.reset();
  }
}

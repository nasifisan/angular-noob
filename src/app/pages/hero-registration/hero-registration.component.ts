import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@Component({
  selector: 'app-hero-registration',
  standalone: true,
  imports: [FormlyModule, FormlyMaterialModule, ReactiveFormsModule],
  templateUrl: './hero-registration.component.html',
  styleUrl: './hero-registration.component.scss',
})
export class HeroRegistrationComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}

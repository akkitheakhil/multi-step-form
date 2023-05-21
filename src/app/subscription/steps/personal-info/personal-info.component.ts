import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { BaseFormStep } from '../base-step.interface';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent
  implements BaseFormStep<PersonalInfoComponent>
{
  @Output() next = new EventEmitter<void>();
  previous: undefined;
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { BaseFormStep } from '@app/subscription-page/steps/base-step.interface';

@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss'],
})
export class AddOnsComponent implements BaseFormStep<AddOnsComponent> {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
}

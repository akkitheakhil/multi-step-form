import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { BaseFormStep } from '../base-step.interface';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements BaseFormStep<PlansComponent> {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
}

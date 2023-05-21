import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { BaseFormStep } from '../base-step.interface';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements BaseFormStep<SummaryComponent> {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
}

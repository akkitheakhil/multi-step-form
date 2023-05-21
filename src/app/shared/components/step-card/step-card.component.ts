import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss'],
})
export class StepCardComponent {
  @Input({ required: true }) stepNo = 1;
  @Input({ required: true }) title = '';
  @Input() label = 'STEP';
  @Input() isSelected = false;
}

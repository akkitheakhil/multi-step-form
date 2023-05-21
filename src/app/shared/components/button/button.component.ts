import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type ButtonType = 'primary' | 'secondary' | 'accent';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input({ required: true }) label = '';
  @Input() type: ButtonType = 'primary';
  @Input() disabled = false;
}

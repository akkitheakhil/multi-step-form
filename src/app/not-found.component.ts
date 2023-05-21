import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `<p>The Page you are looking for is not found</p> `,
  styles: [
    `
      p {
        text-align: center;
      }
    `,
  ],
})
export class NotFoundComponent {}

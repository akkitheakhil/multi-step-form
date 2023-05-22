import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { STEPS } from '@app/constants/subscription.constants';
import { Step } from '@app/models/subscription.model';
import { StepCardComponent } from '@shared/components/step-card/step-card.component';

const StepNames: {
  [keyof in Step]: string;
} = {
  personal_info: 'your info',
  plans: 'selected plan',
  add_ons: 'add Ons',
  summary: 'summary',
} as const;

type StepTracker = {
  name: string;
  no: number;
  isCurrent: boolean;
};

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, StepCardComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input({ required: true }) currentStep = signal<Step>('personal_info');

  protected allSteps = computed(() =>
    Object.entries(STEPS).map(([_, value], index): StepTracker => {
      return {
        name: StepNames[value],
        no: index + 1,
        isCurrent: this.currentStep() === value,
      };
    })
  );
}

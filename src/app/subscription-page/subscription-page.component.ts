import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { STEPS } from '@app/constants/subscription.constants';
import { Step } from '@app/models/subscription.model';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddOnsComponent } from './steps/add-ons/add-ons.component';
import { PersonalInfoComponent } from './steps/personal-info/personal-info.component';
import { PlansComponent } from './steps/plans/plans.component';
import { SummaryComponent } from './steps/summary/summary.component';

const STEPS_COMPONENT = [
  PersonalInfoComponent,
  PlansComponent,
  AddOnsComponent,
  SummaryComponent,
  SidebarComponent,
];

const STEPS_ARRAY = Object.entries(STEPS).map(([_, value]): Step => value);

@Component({
  selector: 'app-subscription-page',
  standalone: true,
  imports: [CommonModule, ...STEPS_COMPONENT],
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss'],
})
export class SubscriptionPageComponent {
  protected stepConst = STEPS;
  protected stepNo = signal<number>(0);
  protected currentStep = signal<Step>(STEPS.PERSONAL_INFO);
  protected nextDisabled = computed(() => this.stepNo() === STEPS_ARRAY.length);
  protected previousDisabled = computed(() => this.stepNo() === 0);
  protected isLastStep = computed(() => this.stepNo() === 3);

  protected handleNextStep(): void {
    if (this.nextDisabled()) {
      return;
    }

    if (this.isLastStep()) {
      this.handleComplete();
      return;
    }

    this.stepNo.update((value) => value + 1);
    this.currentStep.set(STEPS_ARRAY[this.stepNo()]);
  }

  protected handlePreviousStep(): void {
    if (this.previousDisabled()) {
      return;
    }

    this.stepNo.update((value) => value - 1);
    this.currentStep.set(STEPS_ARRAY[this.stepNo()]);
  }

  protected handleComplete(): void {
    if (!this.isLastStep()) {
      return;
    }
    console.log('COMPLETE');
  }
}

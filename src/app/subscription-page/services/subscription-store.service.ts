import { Injectable, signal } from '@angular/core';
import { PLANS, PLAN_TYPE } from '@app/constants/subscription.constants';
import { PersonalInfo, Plan, PlanType } from '@app/models/subscription.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionStoreService {
  private personalInfo = signal<PersonalInfo>({
    email: '',
    name: '',
    phoneNo: '',
  });
  private selectedPlan = signal<Plan>(PLANS.ARCADE);
  private planType = signal<PlanType>(PLAN_TYPE.MONTHLY);
}

import { PLANS, PLAN_TYPE, STEPS } from '../constants/subscription.constants';

export type Plan = (typeof PLANS)[keyof typeof PLANS];
export type Step = (typeof STEPS)[keyof typeof STEPS];
export type PlanType = (typeof PLAN_TYPE)[keyof typeof PLAN_TYPE];

export type PersonalInfo = {
  name: string;
  email: string;
  phoneNo: string;
};

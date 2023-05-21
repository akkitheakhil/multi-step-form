import { EventEmitter } from '@angular/core';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

export interface BaseFormStep<TComponent> {
  next: EventEmitter<void>;
  previous: TComponent extends PersonalInfoComponent
    ? undefined
    : EventEmitter<void>;
}

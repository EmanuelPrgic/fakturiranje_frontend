import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UslugaEditComponent } from '../usluge/usluga-edit/usluga-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<UslugaEditComponent> {
  canDeactivate(component: UslugaEditComponent): boolean{
    if (component.editForm?.dirty) {
      return confirm("Are you sure?");
    }
    return confirm("Are you sure?");
  }
  
}

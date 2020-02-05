import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {PersonService} from '../../services/person.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit.persons',
  templateUrl: '../../persons/edit/edit.person.html',
  styleUrls: ['../../persons/edit/edit.person.css']
})
export class EditPersonComponent {

  constructor(public dialogRef: MatDialogRef<EditPersonComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public personService: PersonService) { }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
        '';
  }

  submit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.personService.updatePerson(this.data);
  }
}

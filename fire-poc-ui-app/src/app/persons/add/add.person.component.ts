import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {PersonService} from '../../services/person.service';
import {FormControl, Validators} from '@angular/forms';
import Person from 'src/app/models/person';


@Component({
  selector: 'app-add.person',
  templateUrl: '../../persons/add/add.person.html',
  styleUrls: ['../../persons/add/add.person.css']
})

export class AddPersonComponent {
  constructor(public dialogRef: MatDialogRef<AddPersonComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Person,
              public personService: PersonService) { }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field':'';
  }

  submit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.personService.addPerson(this.data);
  }
}

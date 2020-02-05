import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {PersonService} from '../../services/person.service';


@Component({
  selector: 'app-delete.person',
  templateUrl: '../../persons/delete/delete.person.html',
  styleUrls: ['../../persons/delete/delete.person.css']
})
export class DeletePersonComponent {

  constructor(public dialogRef: MatDialogRef<DeletePersonComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public personService: PersonService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.personService.deletePerson(this.data.id);
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PersonService} from './services/person.service';
import {HttpClient} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {AddPersonComponent} from './persons/add/add.person.component';
import {EditPersonComponent} from './persons/edit/edit.person.component';
import {DeletePersonComponent} from './persons/delete/delete.person.component';
import Person from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  displayedColumns = ['id', 'first_name', 'last_name', 'age', 'favourite_color', 'hobby', 'actions'];
  exampleDatabase: PersonService | null;
  dataSource: any | null;
  index: number;
  id: number;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public personService: PersonService) {}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  ngOnInit() {
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  addNew(person: Person) {
    const dialogRef = this.dialog.open(AddPersonComponent, {
      data: {person: person }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  startEdit(i: number, id: number, first_name: string, last_name: string, age: Number, favourite_color: string, hobby: string[]) {
    this.id = id;
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditPersonComponent, {
      data: {id: id, first_name: first_name, last_name: last_name, age: age, favourite_color: favourite_color, hobby: hobby}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        this.loadData();
      }
    });
  }

  deleteItem(i: number, id: number) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeletePersonComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        this.loadData();
      }
    });
  }


  public loadData() {
    this.exampleDatabase = new PersonService(this.httpClient);
   this.exampleDatabase.getAllPersons().subscribe((data: any) => {
      console.log("data: "+ data);
        this.dataSource = data;
    });
  //this.dataSource = [{"id":1,"first_name":"John","last_name":"Smith","age":29,"favourite_color":"red","hobby":["shopping","football"]},{"id":2,"first_name":"Sarah","last_name":"Connor","age":54,"favourite_color":"blue","hobby":["chess"]}];
  }
}

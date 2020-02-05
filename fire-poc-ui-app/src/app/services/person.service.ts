import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import Person from '../models/person';

@Injectable()
export class PersonService {
  private readonly API_URL = 'http://localhost:8080/fire/rest/api';

  dataChange: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);
 
  personData: any;

  parsedPerson: Person = null;

  constructor (private httpClient: HttpClient) {}

  get data(): Person[] {
    return this.dataChange.value;
  }

  getpersonData() {
    return this.personData;
  }

  /** CRUD METHODS */
  getAllPersons(): Observable<Person[]> {
   return this.httpClient.get<Person[]>(this.API_URL+"/persons");
  }

  addPerson (person: Person): void {
    person.hobby = person.hobby.toString().split(',');

    this.httpClient.post(this.API_URL+"/person", person).subscribe(data => {
      this.personData = person;
      },
      (err: HttpErrorResponse) => {
      
    });
  }

  updatePerson (person: Person): void {
    person.hobby = person.hobby.toString().split(',');
    this.httpClient.post(this.API_URL+"/person/"+person.id, person).subscribe(data => {
      this.personData = person;
      },
      (err: HttpErrorResponse) => {
      
    });
  }

  deletePerson (id: number): void {
    console.log(id);
    this.httpClient.delete(this.API_URL+"/person/"+id).subscribe(
      
      (err: HttpErrorResponse) => {
      
    });
  }
}


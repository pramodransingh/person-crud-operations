package com.fire.firepocapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fire.firepocapi.model.Person;
import com.fire.firepocapi.service.PersonDataService;

/**
 * Controller to do the CRUD operations on the Person Entity
 * @author Pramod.Ransing
 *
 */
@RestController
@RequestMapping(value = "fire/rest/api")
@CrossOrigin
public class PersonController {
    private PersonDataService personDataService;

    public PersonController(@Autowired PersonDataService personDataService) {
        this.personDataService = personDataService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "/person/{lastName}/{firstName}")
    public ResponseEntity<Person> getPerson(@PathVariable(value="lastName") String lastName,
                         @PathVariable(value="firstName") String firstName) {
        Person person = personDataService.findPerson(lastName, firstName);
        if(person != null) {
            return ResponseEntity.ok().body(person);
        }
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "/person/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable(value="id") String id) {
        Person person = personDataService.findPersonById(Long.parseLong(id));
   
        if(person != null) {
            return ResponseEntity.ok().body(person);
        }
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "/persons")
    public ResponseEntity<List<Person>> getAllPersons() {
        List<Person> listOfPerson = personDataService.findAllPersons();
   
        if(!CollectionUtils.isEmpty(listOfPerson)) {
            return ResponseEntity.status(HttpStatus.OK).body(listOfPerson);
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }
    
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, value= "/person")
    public ResponseEntity<String> addPerson(@RequestBody Person person) {
        boolean personAdded = personDataService.addPerson(person);
        if(personAdded) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
        
        return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }
    
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, value= "/person/{id}")
    public ResponseEntity<String> updatePerson(@PathVariable(value="id") String id, @RequestBody Person person) {
        boolean personUpdated = personDataService.updatePerson(Long.parseLong(id), person);
        if(personUpdated) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    
    @DeleteMapping(produces = MediaType.APPLICATION_JSON_VALUE, value= "/person/{id}")
    public ResponseEntity<String> deletePerson(@PathVariable(value="id") String id) {
        boolean personDeleted = personDataService.deletePerson(Long.parseLong(id));
        if(personDeleted) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    
    @DeleteMapping(produces = MediaType.APPLICATION_JSON_VALUE, value= "/persons")
    public ResponseEntity<String> deleteAllPersons() {
        boolean personsDeleted = personDataService.deleteAllPersons();
        if(personsDeleted) {
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
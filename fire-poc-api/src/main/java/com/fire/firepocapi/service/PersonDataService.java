package com.fire.firepocapi.service;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import com.fire.firepocapi.model.Person;

/**
 * Service which do the operations on Person model
 * @author Pramod.Ransing
 *
 */
@Service
public class PersonDataService {
    public static final List<Person> PERSON_DATA = new ArrayList<>(Arrays.asList(
            new Person("John", "Smith", 29, "red", Stream.of("shopping", "football").collect(Collectors.toList())),
            new Person("Sarah", "Connor", 54, "blue", Stream.of("chess").collect(Collectors.toList()))));

    /**
     * adds the person in the list
     * @param person
     * @return if person already present then return false otherwise true
     */
    public boolean addPerson(Person person) {
        if (isPersonAlreadyPresent(person))
            return false;
        PERSON_DATA.add(person);
        return true;
    }

    /**
     * check if person is already present in the given data list
     * @param person
     * @return
     */
    private boolean isPersonAlreadyPresent(Person person) {
        return PERSON_DATA.contains(person);
    }

    /**
     * Finds the person by its first name and last name
     * @param lastName
     * @param firstName
     * @return Person
     */
    public Person findPerson(String lastName, String firstName) {
        Optional<Person> person = PERSON_DATA.stream() .filter(p ->
        p.getFirst_name().equalsIgnoreCase(firstName) &&
        p.getLast_name().equalsIgnoreCase(lastName) ) .findFirst();
        
        return person.isPresent() ? person.get(): null; 
    }

    /**
     * Finds the person by id from the list
     * @param id
     * @return person
     */
    public Person findPersonById(long id) {
        Optional<Person> person = PERSON_DATA.stream() .filter(p ->
        p.getId().equals(id)).findFirst();
        
        return person.isPresent() ? person.get(): null; 
    }

    /**
     * returns all the persons 
     * @return  list of person
     */
    public List<Person> findAllPersons() {
        return PERSON_DATA;
    }

    /**
     * Updates the given person
     * @param id
     * @param person
     * @return true or false
     */
    public boolean updatePerson(long id, Person person) {
            for(Person personFromList: PERSON_DATA) {
                if(personFromList.getId().equals(id)){
                    personFromList.setFirst_name(person.getFirst_name());
                    personFromList.setLast_name(person.getLast_name());
                    personFromList.setFavourite_color(person.getFavourite_color());
                    personFromList.setAge(person.getAge());
                    personFromList.setHobby(person.getHobby());
                    return true;
                }
            }
            
        return false;
    }

    /**
     * deletes the person by id from the list
     * @param id
     * @return true if person is present in the list otherwise false
     */
    public boolean deletePerson(long id) {
        return PERSON_DATA.removeIf(e -> e.getId().equals(id));
    }

    /**
     * deletes all the persons from the list
     * @return
     */
    public boolean deleteAllPersons() {
        if(PERSON_DATA.size() > 0) {
            PERSON_DATA.clear();
            return true;
        }
        return false;
    }

}

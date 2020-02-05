package com.fire.firepocapi.model;



import static org.junit.jupiter.api.Assertions.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;

public class PersonTest {
    @Test
    public void shouldAssignIdWhenCreated() {
        Person classUnderTest = new Person("John", "Smith", 29, "red", Stream.of("shopping", "football").collect(Collectors.toList()));

        assertNotNull(classUnderTest.getId());
    }

    @Test
    public void idsShouldBeDifferent() {
        Person classUnderTest1 = new Person("John", "Smith", 29, "red", Stream.of("shopping", "football").collect(Collectors.toList()));
        Person classUnderTest2 = new Person("Sarah", "Connor", 54, "blue", Stream.of("chess").collect(Collectors.toList()));

        assertFalse(classUnderTest1.getId().equals(classUnderTest2.getId()));
    }


    @Test
    public void shouldBeDifferent() {
        Person classUnderTest1 = new Person("John", "Smith", 29, "red", Stream.of("shopping", "football").collect(Collectors.toList()));
        Person classUnderTest2 = new Person("Sarah", "Connor", 54, "blue", Stream.of("chess").collect(Collectors.toList()));


        assertNotSame(classUnderTest1, classUnderTest2);
    }
    
    @Test
    public void shouldBeSame() {
        Person classUnderTest1 = new Person("John", "Smith", 29, "red", Stream.of("shopping", "football").collect(Collectors.toList()));
        Person classUnderTest2 = new Person("John", "Smith", 29, "red", Stream.of("shopping", "football").collect(Collectors.toList()));
        
        assertEquals(classUnderTest1, classUnderTest2);
    }
}

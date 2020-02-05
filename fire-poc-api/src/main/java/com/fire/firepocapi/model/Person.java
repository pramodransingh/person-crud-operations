package com.fire.firepocapi.model;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Person model
 * @author Pramod.Ransing
 *
 */
public class Person {
    private static final AtomicLong counter = new AtomicLong();

    private Long id;
    private String first_name;
    private String last_name;
    private int age;
    private String favourite_color;
    private List<String> hobby;

    @SuppressWarnings("unused")
    private Person() {
        this.id = counter.incrementAndGet();
    }

    public Person(String first_name, String last_name, int age, String favourite_color, List<String> hobby) {
        super();
        this.id = counter.incrementAndGet();
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.favourite_color = favourite_color;
        this.hobby = hobby;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getFavourite_color() {
        return favourite_color;
    }

    public void setFavourite_color(String favourite_color) {
        this.favourite_color = favourite_color;
    }

    public List<String> getHobby() {
        return hobby;
    }

    public void setHobby(List<String> hobby) {
        this.hobby = hobby;
    }

    public static AtomicLong getCounter() {
        return counter;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + age;
        result = prime * result + ((favourite_color == null) ? 0 : favourite_color.hashCode());
        result = prime * result + ((first_name == null) ? 0 : first_name.hashCode());
        result = prime * result + ((hobby == null) ? 0 : hobby.hashCode());
        result = prime * result + ((last_name == null) ? 0 : last_name.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Person other = (Person) obj;
        if (age != other.age)
            return false;
        if (favourite_color == null) {
            if (other.favourite_color != null)
                return false;
        } else if (!favourite_color.equals(other.favourite_color))
            return false;
        if (first_name == null) {
            if (other.first_name != null)
                return false;
        } else if (!first_name.equals(other.first_name))
            return false;
        if (hobby == null) {
            if (other.hobby != null)
                return false;
        } else if (!hobby.equals(other.hobby))
            return false;
        if (last_name == null) {
            if (other.last_name != null)
                return false;
        } else if (!last_name.equals(other.last_name))
            return false;
        return true;
    }
    
}

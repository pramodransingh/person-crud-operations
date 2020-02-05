package com.fire.firepocapi.controller;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import com.fire.firepocapi.model.Person;
import com.fire.firepocapi.service.PersonDataService;


@WebMvcTest(PersonController.class)
public class PersonControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PersonDataService personDataService;
    
    private static final  String API_URI = "/fire/api/rest";
    
    /*
     * @Test
     * 
     * @WithMockUser(username = "admin", password = "admin", roles = "USER") public
     * void shouldReturnPersonFromService() throws Exception {
     * when(personDataService.findPerson(any(), any())).thenReturn(new
     * Person("John", "Smith", 29, "red", Stream.of("shopping",
     * "football").collect(Collectors.toList()))); this.mockMvc.perform(get(API_URI
     * + "/person/John/Smith")) .andDo(print()) .andExpect(status().isOk())
     * .andExpect(jsonPath("id").exists())
     * .andExpect(jsonPath("first_name").value("John"))
     * .andExpect(jsonPath("last_name").value("Smith"))
     * .andExpect(jsonPath("age").value(29)); }
     * 
     * @Test
     * 
     * @WithMockUser(username = "admin", password = "admin", roles = "USER") public
     * void shouldReturnNoContentFromService() throws Exception {
     * when(personDataService.findPerson(any(), any())).thenReturn(null);
     * this.mockMvc.perform(get(API_URI + "/person/smith/mary11")) .andDo(print())
     * .andExpect(status().isNoContent()); }
     * 
     * @Test
     * 
     * @WithMockUser(username = "admin", password = "admin", roles = "USER") public
     * void shouldReturnListFromService() throws Exception {
     * when(personDataService.findAllPersons()).thenReturn(PersonDataService.
     * PERSON_DATA); this.mockMvc.perform(get(API_URI + "/persons")) .andDo(print())
     * .andExpect(status().isOk()) .andExpect(jsonPath("$", hasSize(2))); }
     * 
     * @Test
     * 
     * @WithMockUser(username = "admin", password = "admin", roles = "USER") public
     * void shouldReturnNoContentWhenListIsEmptyFromService() throws Exception {
     * when(personDataService.findAllPersons()).thenReturn(new ArrayList<Person>());
     * this.mockMvc.perform(get(API_URI + "/persons")) .andDo(print())
     * .andExpect(status().isNoContent()); }
     * 
     * @Test
     * 
     * @WithMockUser(username = "admin", password = "admin", roles = "USER") public
     * void saveUniquePerson201() throws Exception {
     * 
     * when(personDataService.addPerson((any(Person.class)))).thenReturn(true);
     * String personInJson = "{\"first_name\":\"ABC\", \"last_name\":\"XYZ\"}";
     * 
     * mockMvc.perform(post(API_URI + "/person") .content(personInJson)
     * .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON))
     * .andDo(print()) .andExpect(status().isCreated());
     * 
     * verify(personDataService, times(1)).addPerson(any(Person.class));
     * 
     * }
     * 
     * @Test
     * 
     * @WithMockUser(username = "admin", password = "admin", roles = "USER") public
     * void saveDuplicatePerson409() throws Exception {
     * 
     * when(personDataService.addPerson((any(Person.class)))).thenReturn(false);
     * String personInJson = "{\"first_name\":\"ABC\", \"last_name\":\"XYZ\"}";
     * 
     * mockMvc.perform(post(API_URI + "/person") .content(personInJson)
     * .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON))
     * .andDo(print()) .andExpect(status().isConflict());
     * 
     * verify(personDataService, times(1)).addPerson(any(Person.class));
     * 
     * }
     */
    
}
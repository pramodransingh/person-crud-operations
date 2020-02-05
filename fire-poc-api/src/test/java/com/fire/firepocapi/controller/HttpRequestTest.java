package com.fire.firepocapi.controller;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.security.test.context.support.WithMockUser;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class HttpRequestTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;
    
    private static final  String BASE_URI = "http://localhost:";
    
    private static final  String API_URI = "/fire/api/rest";
    

/*    @Test
    public void shouldReturnPersonDetails() throws Exception {
        assertThat(
            this.restTemplate.withBasicAuth("admin", "admin").getForObject(
                    BASE_URI + port + API_URI + "/person/1",
                String.class
            )
        ).contains("John");
    }
    
    @Test
    @WithMockUser(username = "admin", password = "admin", roles = "USER")
    public void shouldReturnPersonList() throws Exception {
        assertThat(
            this.restTemplate.withBasicAuth("admin", "admin").getForObject(
                    BASE_URI + port + API_URI + "/persons",
                String.class
            )
        ).contains("Sarah");
    } */
}
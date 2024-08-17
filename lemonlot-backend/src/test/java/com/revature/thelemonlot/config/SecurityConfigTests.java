package com.revature.thelemonlot.config;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.test.context.TestPropertySource;
import org.springframework.web.context.WebApplicationContext;

import com.revature.thelemonlot.ThelemonlotApplication;

@SpringBootTest(classes = ThelemonlotApplication.class) // Use main application class
@TestPropertySource(properties = {
        "SPRING_DATASOURCE_URL=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1",
        "SPRING_DATASOURCE_USERNAME=sa",
        "SPRING_DATASOURCE_PASSWORD=password"
})
class SecurityConfigTests {

    @Autowired
    private WebApplicationContext context; // Inject the web application context

    @Autowired
    private SecurityConfig securityConfig; // Autowire the SecurityConfig

    @Test
    void testSecurityFilterChainBean() throws Exception {
        HttpSecurity httpSecurity = context.getBean(HttpSecurity.class); // Get the HttpSecurity bean
        SecurityFilterChain securityFilterChain = securityConfig.securityFilterChain(httpSecurity);
        assertNotNull(securityFilterChain, "SecurityFilterChain bean should not be null");
    }
}

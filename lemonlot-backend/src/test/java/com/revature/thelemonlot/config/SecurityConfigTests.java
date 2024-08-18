package com.revature.thelemonlot.config;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(properties = {
        "spring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1",
        "spring.datasource.username=sa",
        "spring.datasource.password=",
        "SECRET_KEY=P0YfGdONKAXq8bHFO6IoIHZOhkPiNEeOi1dvnf+Ot9M="
})
public class SecurityConfigTests {

    @Autowired
    private ApplicationContext applicationContext;

    @Test
    public void testSecurityFilterChainBean() {
        SecurityFilterChain securityFilterChain = applicationContext.getBean(SecurityFilterChain.class);
        assertNotNull(securityFilterChain, "SecurityFilterChain bean should not be null");
    }

    @Test
    public void testPasswordEncoderBean() {
        BCryptPasswordEncoder passwordEncoder = applicationContext.getBean(BCryptPasswordEncoder.class);
        assertNotNull(passwordEncoder, "BCryptPasswordEncoder bean should not be null");

    }
}

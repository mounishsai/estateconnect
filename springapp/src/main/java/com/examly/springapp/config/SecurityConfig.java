package com.examly.springapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return  http.csrf().disable()
                    .cors()
                    .and()
                    .authorizeHttpRequests()
                    .requestMatchers("/api/login","/api/register","/api/sendOtp","/api/verifyOtp").permitAll()
                    .and()
                    .authorizeHttpRequests( authorize -> authorize
                        .requestMatchers(HttpMethod.GET, "/api/user/{userId}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/properties").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/properties/{propertyId}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/properties").permitAll()
                        // .requestMatchers(HttpMethod.GET, "/api/properties/{title}").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/api/properties/{propertyId}").hasRole("admin")
                        .requestMatchers(HttpMethod.DELETE, "/api/properties/{propertyId}").hasRole("admin")
                        .requestMatchers(HttpMethod.POST, "/api/inquiries").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/inquiries/{inquiryId}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/inquiries/user/{userId}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/inquiries").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/api/inquiries/{inquiryId}").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/api/inquiries/{inquiryId}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/feedback").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/feedback/{feedbackId}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/feedback").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/feedback/user/{userId}").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/api/feedback/{feedbackId}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/blog").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/blog/{blogId}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/upload-image").hasRole("admin")
                        .requestMatchers(HttpMethod.GET, "/get-image/{title}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/tours").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/tours").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/tours/status").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/payments").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/payments").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/payments/{paymentId}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/sendBrochure/{userId}/{propertyId}").permitAll()
                        .requestMatchers("/uploads/**").permitAll()
                    .anyRequest().authenticated())
                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                    .authenticationProvider(authenticationProvider())
                    .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                    .build();

    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService);
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;

    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}


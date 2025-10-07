package com.examly.springapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CrosConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins( "https://8081-caebbecbccbfecefecbffabacccacdadbaceec.premiumproject.examly.io",
                                            "https://8081-fddebdcadbdefefecbffabacccacdadbaceec.premiumproject.examly.io",
                                            "https://8081-abcadfcbcedefecbffabacccacdadbaceec.premiumproject.examly.io",
                                            "https://8081-bdabcdafdecaccefecbffabacccacdadbaceec.premiumproject.examly.io",
                                            "https://8081-fbdddeffbffefecbffabacccacdadbaceec.premiumproject.examly.io",
                                            "https://8081-fddcfbbacfcefecbffabacccacdadbaceec.premiumproject.examly.io")
                .allowedMethods("POST","GET","PUT","DELETE","OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
    
}

package com.ssafy.sval.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Parameter;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.List;

@EnableSwagger2
@Configuration
public class SwaggerConfig {
    private ApiInfo metadata() {
        return new ApiInfoBuilder().title("A306 Project").description("temp description")
                .version("1.0").build();
    }
    @Bean
    public Docket api() {
        ParameterBuilder aParameterBuilder = new ParameterBuilder();
        aParameterBuilder.name("jwt-auth-token")
                .description("JWT Token")
                .modelRef(new ModelRef("string"))
                .parameterType("header")
                .required(false)
                .build();
        List<Parameter> headerParams = new ArrayList<>();
        headerParams.add(aParameterBuilder.build());
        return new Docket(DocumentationType.SWAGGER_2)
                .globalOperationParameters(headerParams)
                .select().apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any()).build().apiInfo(metadata());
    }
}
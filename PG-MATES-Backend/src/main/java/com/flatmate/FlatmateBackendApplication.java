package com.flatmate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.flatmate.models.Admin;
import com.flatmate.services.AdminService;
import com.flatmate.utils.FileUploadProperties;

@SpringBootApplication
@EnableJpaAuditing
@EnableConfigurationProperties({
    FileUploadProperties.class
})
public class FlatmateBackendApplication {
	
	private static final Logger log = LoggerFactory.getLogger(FlatmateBackendApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(FlatmateBackendApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(AdminService srv) {
	    return (args) -> {
	    	if(srv.countAdmin()==0) {
	    		Admin admin=new Admin();
	    		admin.setUserid("admin");
	    		admin.setPwd(srv.encrypt("admin"));
	    		admin.setUname("Administrator");
	    		srv.saveAdmin(admin);
	    		log.info("Admin user created successfully");
	    	}
	    };
	}

}

package com.flatmate.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flatmate.dtos.CustomerDTO;
import com.flatmate.services.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

	@Autowired private CustomerService cservice;
	
	@PostMapping
	public ResponseEntity<?> save(CustomerDTO dto) {	
		if(cservice.checkExist(dto.getUserid())) {
			return ResponseEntity.badRequest().body("Email already registered");
		}
		cservice.saveCustomer(dto);
		return ResponseEntity.ok("user registered successfully");
	}
	
	@GetMapping
	public ResponseEntity<?> findAll() {		
		return ResponseEntity.ok(cservice.listAll());
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> findById(@PathVariable("id") int id) {		
		return ResponseEntity.ok(cservice.findById(id));
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> updateStatus(@PathVariable("id") int id) {	
		cservice.updateStatus(id);
		return ResponseEntity.ok("User status updated");
	}
}

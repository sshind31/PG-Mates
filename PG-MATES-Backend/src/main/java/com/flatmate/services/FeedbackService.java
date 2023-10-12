package com.flatmate.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flatmate.dtos.FeedbackDTO;
import com.flatmate.models.Apartment;
import com.flatmate.models.Customer;
import com.flatmate.models.Feedback;
import com.flatmate.repository.FeedbackRepository;

@Service
public class FeedbackService {

	@Autowired private FeedbackRepository repo;
	@Autowired private CustomerService csrv;
	@Autowired private BookingService bsrv;
	
	public void saveFeedback(FeedbackDTO dto) {
		Customer cust=csrv.findById(dto.getUserid());
		Apartment ap=bsrv.currentBooking(dto.getUserid()).getApartment();
		System.out.println(ap);
		Feedback fb=new Feedback();
		fb.setApartment(ap);
		fb.setCustomer(cust);
		fb.setDescr(dto.getDescr());
		repo.save(fb);
	}
	
	public List<Feedback> listAll(){
		return repo.findAll();
	}
}

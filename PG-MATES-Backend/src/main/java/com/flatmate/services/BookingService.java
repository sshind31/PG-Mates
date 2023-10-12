package com.flatmate.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.flatmate.dtos.BookingDTO;
import com.flatmate.models.Apartment;
import com.flatmate.models.Booking;
import com.flatmate.models.Customer;
import com.flatmate.models.Payment;
import com.flatmate.repository.BookingRepository;
import com.flatmate.repository.PaymentRepository;

@Service
public class BookingService {

	@Autowired private BookingRepository brepo;
	@Autowired private PaymentRepository prepo;
	@Autowired private CustomerService csrv;
	@Autowired private OwnerService osrv;
	@Autowired private ApartmentService asrv;
	
	@Value("${ezyrent.max-in-one-apartment}")
	private int maxsize;
	
	public void saveBooking(BookingDTO dto) {
		Booking bk=new Booking();
		Payment pmt=new Payment();
		Customer cust=csrv.findById(dto.getUserid());
		Apartment ap=asrv.findById(dto.getApid());
		bk.setApartment(ap);
		bk.setCustomer(cust);
		bk.setOwner(ap.getOwner());
		brepo.save(bk);
		
		BeanUtils.copyProperties(dto, pmt);
		pmt.setCustomer(cust);
		pmt.setRemarks("Booking Amount");
		prepo.save(pmt);
	}
	
	public boolean checkBooking(int id) {
		Booking bk=brepo.findByCustomerAndStatus(csrv.findById(id), "Booked");
		return bk!=null;
	}
	
	public Booking currentBooking(int id) {
		return brepo.findByCustomerAndStatus(csrv.findById(id), "Booked");
	}
	
	public List<Booking> allbookings(){
		return brepo.findAll();
	}
	
	public List<Booking> apartmentbookings(int apid){
		return brepo.findByApartmentAndStatus(asrv.findById(apid), "Booked");
	}
	
	public boolean checkAvailablity(int apid) {
		long size=brepo.findByApartmentAndStatus(asrv.findById(apid), "Booked").size();
		System.out.println("Size "+size+" maxsize "+maxsize);
		return size>=maxsize;
	}
	
	public List<Booking> allUserbookings(int id){
		return brepo.findByCustomer(csrv.findById(id));
	}
	
	public List<Booking> allOwnerbookings(int id){
		return brepo.findByOwnerAndStatus(osrv.findById(id),"Booked");
	}
	
	public List<Payment> allPayments(){
		return prepo.findAll();
	}
	
	public List<Payment> allUserPayments(int id){
		return prepo.findByCustomer(csrv.findById(id));
	}
	
	public List<Payment> allOwnerPayments(int id){
		return prepo.findOwnerPayments(id);
	}
	
	public Booking findByid(int id) {
		return brepo.getById(id);
	}
	
	public void cancelBooking(int id) {
		Booking bk= brepo.getById(id);
		bk.setStatus("Left by "+bk.getCustomer().getName());
		brepo.save(bk);
	}
	
	
}

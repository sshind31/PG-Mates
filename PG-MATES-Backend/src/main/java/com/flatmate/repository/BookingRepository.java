package com.flatmate.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flatmate.models.Apartment;
import com.flatmate.models.Booking;
import com.flatmate.models.Customer;
import com.flatmate.models.Owner;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {

	List<Booking> findByCustomer(Customer customer);
	List<Booking> findByApartmentAndStatus(Apartment apartment,String status);
	Booking findByCustomerAndStatus(Customer customer,String status);
	List<Booking> findByOwnerAndStatus(Owner owner,String status);
}

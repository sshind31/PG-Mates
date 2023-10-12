package com.flatmate.models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name="customer_id")
	private Customer customer;
	@ManyToOne
	@JoinColumn(name="apartment_id")
	private Apartment apartment;
	@ManyToOne
	@JoinColumn(name="owner_id")
	private Owner owner;
	private LocalDate bookdate;
	private String status;
	
	
	public Owner getOwner() {
		return owner;
	}

	public void setOwner(Owner owner) {
		this.owner = owner;
	}

	public Booking() {
		this.bookdate=LocalDate.now();
		this.status="Booked";
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public Apartment getApartment() {
		return apartment;
	}
	public void setApartment(Apartment apartment) {
		this.apartment = apartment;
	}
	public LocalDate getBookdate() {
		return bookdate;
	}
	public void setBookdate(LocalDate bookdate) {
		this.bookdate = bookdate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Booking [id=" + id + ", customer=" + customer + ", apartment=" + apartment + ", bookdate=" + bookdate
				+ ", status=" + status + "]";
	}
	
	
}

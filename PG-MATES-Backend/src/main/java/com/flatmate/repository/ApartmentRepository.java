package com.flatmate.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flatmate.models.Apartment;
import com.flatmate.models.Owner;

@Repository
public interface ApartmentRepository extends JpaRepository<Apartment, Integer> {

	List<Apartment> findByIsactive(boolean isactive);
	
	List<Apartment> findByOwner(Owner owner);
	
	List<Apartment> findByGenderAndIsactive(String gender,boolean isactive);
	List<Apartment> findByFlattypeAndIsactive(String flattype,boolean isactive);
	List<Apartment> findByFurnishtypeAndIsactive(String furnishtype,boolean isactive);
	
	List<Apartment> findByFurnishtypeAndGenderAndIsactive(String furnishtype,String gender,boolean isactive);
	List<Apartment> findByFurnishtypeAndFlattypeAndIsactive(String furnishtype,String flattype,boolean isactive);
	List<Apartment> findByGenderAndFlattypeAndIsactive(String gender,String furnishtype,boolean isactive);

	List<Apartment> findByGenderAndFlattypeAndFurnishtypeAndIsactive(String gender,String flattype,String furnishtype,boolean isactive);
}

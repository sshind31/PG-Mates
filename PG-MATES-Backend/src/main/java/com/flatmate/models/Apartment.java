package com.flatmate.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Apartment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String address;
	private String city;
	private String district;
	private int lightbill;
	private String flattype;
	private String extra;
	private int rent;
	private String gender;
	private String furnishtype;
	private String photo1;
	private String photo2;
	private String photo3;
	private String photo4;
	private boolean isactive;
	@ManyToOne
	@JoinColumn(name="owner_id")
	private Owner owner;
	
	public Apartment() {
		this.isactive=true;
	}
	
	public boolean isIsactive() {
		return isactive;
	}
	public void setIsactive(boolean isactive) {
		this.isactive = isactive;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public int getLightbill() {
		return lightbill;
	}
	public void setLightbill(int lightbill) {
		this.lightbill = lightbill;
	}
	public String getFlattype() {
		return flattype;
	}
	public void setFlattype(String flattype) {
		this.flattype = flattype;
	}
	public String getExtra() {
		return extra;
	}
	public void setExtra(String extra) {
		this.extra = extra;
	}
	public int getRent() {
		return rent;
	}
	public void setRent(int rent) {
		this.rent = rent;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getFurnishtype() {
		return furnishtype;
	}
	public void setFurnishtype(String furnishtype) {
		this.furnishtype = furnishtype;
	}
	public String getPhoto1() {
		return photo1;
	}
	public void setPhoto1(String photo1) {
		this.photo1 = photo1;
	}
	public String getPhoto2() {
		return photo2;
	}
	public void setPhoto2(String photo2) {
		this.photo2 = photo2;
	}
	public String getPhoto3() {
		return photo3;
	}
	public void setPhoto3(String photo3) {
		this.photo3 = photo3;
	}
	public String getPhoto4() {
		return photo4;
	}
	public void setPhoto4(String photo4) {
		this.photo4 = photo4;
	}
	public Owner getOwner() {
		return owner;
	}
	public void setOwner(Owner owner) {
		this.owner = owner;
	}
	@Override
	public String toString() {
		return "Apartment [id=" + id + ", name=" + name + ", address=" + address + ", city=" + city + ", district="
				+ district + ", lightbill=" + lightbill + ", flattype=" + flattype + ", extra=" + extra + ", rent="
				+ rent + ", gender=" + gender + ", furnishtype=" + furnishtype + ", photo1=" + photo1 + ", photo2="
				+ photo2 + ", photo3=" + photo3 + ", photo4=" + photo4 + ", owner=" + owner + "]";
	}
	
	
}

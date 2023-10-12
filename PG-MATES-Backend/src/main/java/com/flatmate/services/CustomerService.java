package com.flatmate.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flatmate.dtos.CustomerDTO;
import com.flatmate.dtos.ForgotPasswordDTO;
import com.flatmate.dtos.LoginDTO;
import com.flatmate.models.Admin;
import com.flatmate.models.Customer;
import com.flatmate.repository.CustomerRepository;
import com.flatmate.utils.StorageService;

@Service
public class CustomerService {

	@Autowired private CustomerRepository crepo;
	@Autowired private StorageService storageService;
	@Autowired private AdminService asrv;
	
	public void saveCustomer(CustomerDTO dto) {
		Customer customer=new Customer();
		BeanUtils.copyProperties(dto, customer);
		String picname=storageService.store(dto.getPhoto());
		customer.setUidphoto(picname);
		customer.setPwd(asrv.encrypt(dto.getPwd()));
		crepo.save(customer);
	}
	
	public boolean validate(ForgotPasswordDTO dto) {
		if(crepo.findByUserid(dto.getUserid())!=null) {
			Customer admin=crepo.findByUserid(dto.getUserid());
			if(admin.getQuestion().equals(dto.getQuestion()) && admin.getAnswer().equals(dto.getAnswer()))
				return true;			
			else
				return false;
		}else {
			return false;
		}
	}
	
	public void updatePassword(ForgotPasswordDTO dto) {
		Customer admin=crepo.findByUserid(dto.getUserid());
		admin.setPwd(asrv.encrypt(dto.getPwd()));
		crepo.save(admin);
	}
	
	public List<Customer> listAll(){
		return crepo.findAll();
	}
	
	public boolean checkExist(String userid) {
		return crepo.findByUserid(userid)!=null;
	}
	
	public Customer findByUserId(String userid) {
		return crepo.findByUserid(userid);
	}
	
	public Customer findById(int id) {
		return crepo.getById(id);
	}
	
	public void updateStatus(int id) {
		Customer owner= crepo.getById(id);
		owner.setActive(!owner.isActive());
		crepo.save(owner);
	}
	
	public Customer validate(LoginDTO dto) {
		System.out.println(dto.getUserid());
		Customer cust=findByUserId(dto.getUserid());
		if(cust!=null && cust.getPwd().equals(asrv.encrypt(dto.getPwd())) && cust.isActive()) {
			return cust;
		}else {
			return null;
		}
	}
}

package com.flatmate.services;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flatmate.dtos.ForgotPasswordDTO;
import com.flatmate.models.Admin;
import com.flatmate.repository.AdminRepository;

@Service
public class AdminService {
	@Autowired AdminRepository dao;
	
	public void saveAdmin(Admin admin) {
		dao.save(admin);
	}

	public Admin validate(String userid, String pwd) {
		// TODO Auto-generated method stub
		Optional<Admin> admin=dao.findById(userid);
		if(admin.isPresent() && admin.get().getPwd().equals(encrypt(pwd))) {
			return admin.get();
		}
		return null;
	}
	
	public boolean validate(ForgotPasswordDTO dto) {
		if(dao.existsById(dto.getUserid())) {
			Admin admin=dao.getById(dto.getUserid());
			if(admin.getQuestion().equals(dto.getQuestion()) && admin.getAnswer().equals(dto.getAnswer()))
				return true;			
			else
				return false;
		}else {
			return false;
		}
	}
	
	public void updatePassword(ForgotPasswordDTO dto) {
		Admin admin=dao.getById(dto.getUserid());
		admin.setPwd(dto.getPwd());
		dao.save(admin);
	}

	public void updateAdmin(Admin admin) {
		if(admin.getPwd().equals("") || admin.getPwd()==null) {
			admin.setPwd(dao.getById(admin.getUserid()).getPwd());
		}
		dao.save(admin);		
	}

	public long countAdmin() {
		// TODO Auto-generated method stub
		return dao.count();
	}
	
	public String encrypt(String text) {
		try {
		MessageDigest messageDigest = MessageDigest.getInstance("MD5");
		byte[] md=messageDigest.digest(text.getBytes());
		BigInteger bi=new BigInteger(1,md);
		return bi.toString(16);
		}catch(Exception ex) {
			System.err.println("Error "+ex.getMessage());
		}
		return  null;
	}
}

package com.flatmate.dtos;

import org.springframework.web.multipart.MultipartFile;

import com.flatmate.models.Owner;

public class OwnerDTO extends Owner {
	private MultipartFile uidfile;
	private MultipartFile lightbillfile;
	
	public MultipartFile getUidfile() {
		return uidfile;
	}
	public void setUidfile(MultipartFile uidfile) {
		this.uidfile = uidfile;
	}
	public MultipartFile getLightbillfile() {
		return lightbillfile;
	}
	public void setLightbillfile(MultipartFile lightbillfile) {
		this.lightbillfile = lightbillfile;
	}

	
}

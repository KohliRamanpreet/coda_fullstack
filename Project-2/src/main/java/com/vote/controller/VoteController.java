package com.vote.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.vote.model.Candidate2Detail;
import com.vote.repository.CandidateRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api111")
public class VoteController {

	@Autowired
	private CandidateRepository cr;
	@RequestMapping(value="/fetchDetails", method = RequestMethod.GET)
	public List<Candidate2Detail> fetchDetailss()
	{
		return (List<Candidate2Detail>) cr.findAll();
		
	}
	@PostMapping("/add")
	public boolean add(@RequestBody  Candidate2Detail user) {
		System.out.println(user);
		cr.save(user);
		return true;
		
	}
	@PutMapping("/update")
	public boolean update(@RequestBody int user)
	{  
	
		System.out.println("hii"+user);
		Candidate2Detail cd=cr.findById(user).get();
		cd.setVotes(cd.getVotes()+1);
		cr.save(cd);
		return true;
	}
	@PutMapping("/edit")
	public boolean edit(@RequestBody Candidate2Detail cd)
	{  
		cr.save(cd);
		return true;
	}
	@DeleteMapping("/delete")
	public boolean delete(@RequestBody Candidate2Detail cd)
	{
		cr.delete(cd);
		return true;
	}
	@PostMapping("/fetchById")
	public Candidate2Detail fetchById(@RequestBody int id)
	{
		Candidate2Detail cd=cr.findById(id).get();
		return cd;
	}
	



}

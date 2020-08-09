package com.vote.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "T1111_Wallets")
public class Candidate2Detail {
	@Id
	@GeneratedValue(strategy  = GenerationType.AUTO)
	@Column(name="user_id")
	private int userId;  
    private String name;
    private int votes;
    private int challSolved;
    private int expertLevel;
    @OneToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL,targetEntity = Interests1.class)
   private List<Interests1> key=new ArrayList<>();
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getVotes() {
		return votes;
	}
	public void setVotes(int votes) {
		this.votes = votes;
	}
	public int getChallSolved() {
		return challSolved;
	}
	public void setChallSolved(int challSolved) {
		this.challSolved = challSolved;
	}
	public int getExpertLevel() {
		return expertLevel;
	}
	public void setExpertLevel(int expertLevel) {
		this.expertLevel = expertLevel;
	}
	public List<Interests1> getKey() {
		return key;
	}
	public void setKey(List<Interests1> key) {
		this.key = key;
	}
	public Candidate2Detail(int userId, String name, int votes, int challSolved, int expertLevel, List<Interests1> key) {
		super();
		this.userId = userId;
		this.name = name;
		this.votes = votes;
		this.challSolved = challSolved;
		this.expertLevel = expertLevel;
		this.key = key;
	}
	public Candidate2Detail() {
		super();
	}
	@JsonProperty("votes")
	private void unpackNested(Integer flight_id) {
		Candidate2Detail cd=new Candidate2Detail();
	    cd.setVotes(flight_id);
	}
	
	
}
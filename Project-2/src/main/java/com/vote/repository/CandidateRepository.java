package com.vote.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vote.model.Candidate2Detail;

@Repository
public interface CandidateRepository extends CrudRepository<Candidate2Detail, Integer> {

}

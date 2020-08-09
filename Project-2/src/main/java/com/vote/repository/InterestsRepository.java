package com.vote.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.vote.model.Interests1;
@Repository
public interface InterestsRepository extends JpaRepository<Interests1, Integer> {

}

package com.example.codeclan.pirateservice.repository;

import com.example.codeclan.pirateservice.models.Pirate;
import com.example.codeclan.pirateservice.models.Raid;
import com.example.codeclan.pirateservice.models.Ship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PirateRepository extends JpaRepository<Pirate, Long> {

    List<Pirate> findByRaidsId(long id);

    List<Pirate> findByRaidsLocation(String location);

    List<Pirate> findByAgeGreaterThan(int age);

    List<Pirate> findByFirstName(String firstName);

    List<Pirate> findDistinctByFirstNameAndLastName(String firstName, String lastName);

    List<Pirate> findByRaidsLocationAndRaidsLootGreaterThan(String location, int loot);
}
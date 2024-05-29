package com.example.IntefejsyBack.repository;

import com.example.IntefejsyBack.entity.Door;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoorRepository extends JpaRepository<Door, Long> {

}

package com.example.building.repository;

import com.example.building.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Projectrepo extends JpaRepository<Project,Integer> {

    List<Project> findProjectByServiceproviderId(Integer spid);
}

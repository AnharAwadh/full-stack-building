package com.example.building.repository;

import com.example.building.DTO.ProviderDto;
import com.example.building.model.Myuser;
import com.example.building.projection.ProviderInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Myuserrepo extends JpaRepository<Myuser,Integer> {
    Myuser findByAccount_Email(String email);


    @Query("select new com.example.building.DTO.ProviderDto(m.firstName,m.lastName,m.account.email,m.phonenumber,m.id)  from Myuser m  where m.account.role = ?1")
    List<ProviderDto> getProviders(String role);


}

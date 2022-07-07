package com.example.building.repository;

import com.example.building.model.Appointment;
import com.example.building.model.Myuser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface Appointmentrepo extends JpaRepository<Appointment,Integer> {

  //  Appointment findAllAppointmentByDate(LocalDate date);
   // List<Appointment> findAppointmentByMyuserId(Integer uid);
    List<Appointment> findAppointmentsByMyuserId(Integer uid);
    List<Appointment> findAppointmentsByServiceproviderId(Integer spid);
    List<Appointment> findByServiceprovider_IdAndStatusIn(Integer spid,String[] staus);
    Optional<Appointment> findByIdAndMyuserAndStatus(Integer id, Myuser myuser,String status);

}

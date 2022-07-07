package com.example.building.controller;

import com.example.building.DTO.CreateAppointmentDto;
import com.example.building.Utils;
import com.example.building.model.*;
import com.example.building.service.Appointservice;
import com.example.building.service.Myuserservice;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/appointment")
public class Appointcontroller {

    private final Appointservice appointmentService;
    private final Myuserservice myuserservice;


    @PostMapping("/addappointment/{appid}")
    public ResponseEntity<Api> addAppointment(@PathVariable Integer appid){
        Account account = Utils.getAccount(SecurityContextHolder.getContext());
        Myuser myuser = myuserservice.getUserByEmail(account.getEmail());
        appointmentService.bookAppointment(appid,myuser);
        return ResponseEntity.status(201).body(new Api(" Appointment booked",201));

    }

    @GetMapping("/get-appointment-available/{userId}")
    public ResponseEntity getAppointment(@PathVariable Integer userId){

        return ResponseEntity.status(201).body(appointmentService.getAvailableAppointment(userId));
    }
    @DeleteMapping("/canceled-appointment/{appid}")
    public ResponseEntity canceledAppointmentByUser(@PathVariable Integer appid){
        Account account = Utils.getAccount(SecurityContextHolder.getContext());
        Myuser myuser = myuserservice.getUserByEmail(account.getEmail());
        appointmentService.canceledAppointment(appid,myuser);
        return ResponseEntity.status(200).body("The Appointment canceled");

    }
    @GetMapping("/get-appointment-doctor/{spId}")
    public ResponseEntity getAppointmentByServiceProvider(@PathVariable Integer spId){
        return ResponseEntity.status(201).body(appointmentService.getAppointmentByySpId(spId));

    }
    @PostMapping("/creat-appointment")
    public ResponseEntity creatAppointment(@RequestBody CreateAppointmentDto createAppointmentDto){

        appointmentService.createAppointment(createAppointmentDto);

        return ResponseEntity.status(200).body("Appointment added");
    }
    @GetMapping("/get-appontment-by-patient/{userId}")
    public ResponseEntity getAppointmentByUser(@PathVariable Integer userId){

        return ResponseEntity.status(201).body(appointmentService.getAppointmentByyUserId(userId));

    }
}

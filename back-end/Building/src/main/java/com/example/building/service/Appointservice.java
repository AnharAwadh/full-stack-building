package com.example.building.service;

import com.example.building.DTO.CreateAppointmentDto;
import com.example.building.exeption.InvalidId;
import com.example.building.model.Admin;
import com.example.building.model.Appointment;
import com.example.building.model.Myuser;
import com.example.building.model.ServiceProvider;
import com.example.building.repository.Appointmentrepo;
import com.example.building.repository.Myuserrepo;
import com.example.building.repository.SPrepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@RequiredArgsConstructor
public class Appointservice {
    private final Appointmentrepo appointmentrepo;
private final Myuserrepo myuserrepo;
private final SPrepo sPrepo;
private  final SPservice sPservice;



    public List<Appointment> getAppointmentByyUserId(Integer userId){
        return appointmentrepo.findAppointmentsByMyuserId(userId);
    }

    public List<Appointment> getAppointmentByySpId(Integer spId){
        return appointmentrepo.findAppointmentsByServiceproviderId(spId);
    }
   public void createAppointment(CreateAppointmentDto createAppointmentDto) {
       long days = ChronoUnit.DAYS.between(createAppointmentDto.getStartDate(), createAppointmentDto.getEndDate());
       Myuser serviceProvider = myuserrepo.findById(createAppointmentDto.getUserId()).get();
       for (int i=0;i < days + 1; i++) {
           Integer  currentPeriod = createAppointmentDto.getPeriod();
           LocalTime startTime = LocalTime.of(createAppointmentDto.getStartTime(),0);
           Appointment appointment = createAppointment( serviceProvider, createAppointmentDto.getPeriod(),
                   startTime, createAppointmentDto.getStartDate().plusDays(i));
           appointmentrepo.save(appointment);
           while (true) {
               LocalTime localTime = startTime.plusMinutes(currentPeriod);
               if(localTime.getHour() == createAppointmentDto.getEndTime()) {
                   break;
               }
               Appointment nextAppointment = createAppointment(serviceProvider, createAppointmentDto.getPeriod(),
                       localTime, createAppointmentDto.getStartDate().plusDays(i));
               appointmentrepo.save(nextAppointment);
               currentPeriod = currentPeriod + createAppointmentDto.getPeriod();
           }
       }
   }



    private Appointment createAppointment(Myuser myuser,
                                          Integer period,
                                          LocalTime startTime,
                                          LocalDate localDate) {
        Appointment appointment = new Appointment();
        appointment.setServiceprovider(myuser);
        appointment.setPeriod(period);
        appointment.setStatus("available");
        appointment.setTime(startTime);
        appointment.setLocalDate(localDate);
        return appointment;
    }
    public List<Appointment> getAvailableAppointment(Integer spId) {
        return appointmentrepo.findByServiceprovider_IdAndStatusIn(spId,new String[] {"available","canceled"});
    }
    public void bookAppointment(Integer appointmentId,Myuser myuser) {
        Appointment appointment = appointmentrepo.findById(appointmentId).orElseThrow(() -> new InvalidId("invalid appointment"));
        if(appointment.getStatus() == "booked") {
            throw new RuntimeException("appointment already booked");
        }
        appointment.setStatus("booked");
        appointment.setMyuser(myuser);
        appointmentrepo.save(appointment);
    }


    public void canceledAppointment(Integer appointmentId, Myuser myuser) {
        Appointment appointment = appointmentrepo.findByIdAndMyuserAndStatus(appointmentId,myuser,"booked").orElseThrow(() -> new InvalidId("invalid appointment"));
        appointment.setStatus("canceled");
        appointment.setMyuser(myuser);
        appointmentrepo.save(appointment);
    }
}

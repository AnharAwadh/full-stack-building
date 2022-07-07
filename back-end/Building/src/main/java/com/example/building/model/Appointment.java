package com.example.building.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Data@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate localDate;
    @JsonFormat(pattern="HH:mm:ss")
    private LocalTime time;
    @Pattern(regexp = "booked|available|canceled")
    private String status;
    private Integer period;



    @ManyToOne
    //@JsonIgnore
    private Myuser myuser;

    @ManyToOne
    //@JsonIgnore
    private Myuser serviceprovider;
}

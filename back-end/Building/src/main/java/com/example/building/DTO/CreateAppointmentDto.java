package com.example.building.DTO;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@NotNull
@Data
public class CreateAppointmentDto {
    private Integer userId;
    private LocalDate startDate;
    private LocalDate endDate;
    private Integer period;
    private Integer startTime;
    private Integer endTime;
}

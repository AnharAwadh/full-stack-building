package com.example.building.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProviderDto {
    private String firstName;
    private String lastName;
    private String email;
    private String phonenumber;
    private Integer userId;

}

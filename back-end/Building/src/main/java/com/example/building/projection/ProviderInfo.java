package com.example.building.projection;

import com.example.building.model.AccountInfo;

public interface ProviderInfo {
    String getFirstName();

    String getLastName();

    AccountInfo getAccount();
}

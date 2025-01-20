package com.storyin.Cab_Book_driver.service;

import com.storyin.Cab_Book_driver.contant.AppConstant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class CabService {
    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;

    public boolean updateLocation(String location){
        kafkaTemplate.send(AppConstant.CAB_LOCATION, location);
        return true;
    }

}

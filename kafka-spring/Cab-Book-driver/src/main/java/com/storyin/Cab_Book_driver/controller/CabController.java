package com.storyin.Cab_Book_driver.controller;

import com.storyin.Cab_Book_driver.service.CabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/location")
public class CabController {

    @Autowired
    private CabService cabService;

    @PutMapping
    public ResponseEntity updateLocation() {
        int range = 100;
        while (range > 0) {
//            System.out.println(Math.random() + " , " + Math.random());
            cabService.updateLocation(Math.random() + " , " + Math.random());
            try {
                Thread.sleep(500);
            } catch (Exception e) {
                System.out.println(e);
            }
            range--;
        }

        return new ResponseEntity<>(Map.of("message", "Location is updated"), HttpStatus.CREATED);
    }

}

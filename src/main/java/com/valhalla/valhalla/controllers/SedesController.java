package com.valhalla.valhalla.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Sedes;
import com.valhalla.valhalla.services.SedesService;

@RestController

@RequestMapping("/sedes")
public class SedesController {

    @Autowired
    private SedesService userService;

    @GetMapping()
    public List<Sedes> getAllSedes() {
        return userService.getSedes();
    }
}

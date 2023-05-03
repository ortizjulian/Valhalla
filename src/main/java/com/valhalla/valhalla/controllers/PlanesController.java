package com.valhalla.valhalla.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Planes;
import com.valhalla.valhalla.services.PlanesService;

@RestController

@RequestMapping("/planes")
public class PlanesController {

    @Autowired
    private PlanesService userService;

    @GetMapping()
    public List<Planes> findAllWithBeneficios() {
        return userService.getPlanes();
    }
}
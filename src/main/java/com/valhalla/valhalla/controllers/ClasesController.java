package com.valhalla.valhalla.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Clases;
import com.valhalla.valhalla.services.ClasesService;

@RestController
@RequestMapping("api/clases")
public class ClasesController {

    @GetMapping()
    public List<Clases> getAllClases() {
        return clasesService.getClases();
    }

    @Autowired
    private ClasesService clasesService;

}
package com.valhalla.valhalla.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Prizes;
import com.valhalla.valhalla.services.PrizesService;

@RestController
@RequestMapping("api/prizes")
public class PrizesController {


    @GetMapping()
    public List<Prizes> getAllPrizes() {
        return prizesService.getPrizes();
    }

    @Autowired
    private PrizesService prizesService;



}
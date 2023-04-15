package com.valhalla.valhalla.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Prizes;

@RestController
@RequestMapping("/prizes")
public class PrizesController {

    ArrayList<Prizes> listPrizes = new ArrayList<Prizes>();

    public PrizesController() {
        listPrizes.add(new Prizes(1, "Termo"));
        listPrizes.add(new Prizes(2, "Guantes"));
        listPrizes.add(new Prizes(3, "Proteína"));
        listPrizes.add(new Prizes(4, "Creatina"));
        listPrizes.add(new Prizes(5, "Preentreno"));

    }

    @GetMapping()
    public ArrayList<Prizes> getAllPlanes() {
        return listPrizes;
    }

}
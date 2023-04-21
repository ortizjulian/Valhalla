package com.valhalla.valhalla.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.Calendar;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Clases;

@RestController
@RequestMapping("/calendar")
public class ClasesController {

    ArrayList<Clases> listClases = new ArrayList<Clases>();

    public ClasesController() {

        Calendar calendar = Calendar.getInstance();
        calendar.set(2023, Calendar.APRIL, 20, 10, 0, 0);
        listClases.add(new Clases(1, "Calistenia", "Segundo piso", calendar.getTime(), 1, 1, 20));
    }

    @GetMapping()
    public ArrayList<Clases> getAllSedes() {
        return listClases;
    }
}

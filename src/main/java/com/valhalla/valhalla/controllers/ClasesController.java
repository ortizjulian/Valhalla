package com.valhalla.valhalla.controllers;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Clases;

@RestController
@RequestMapping("/calendar")
public class ClasesController {

    ArrayList<Clases> listClases = new ArrayList<Clases>();

    public ClasesController() {

        listClases.add(new Clases(1, "Calistenia", "Segundo piso", new Date("2023/4/21 10:00:00"),
                new Date("2023/4/21 12:00"), 1, 1, 20));
        listClases.add(new Clases(2, "Zamba", "Segundo piso", new Date("2023/4/21 2:00:00"),
                new Date("2023/4/21 3:00:00"), 1, 1, 20));
    }

    @GetMapping()
    public ArrayList<Clases> getAllSedes() {
        return listClases;
    }

    @PostMapping(value = "/create")
    public Clases RegisterUser(@RequestBody Clases clase) {

        Clases cla = new Clases();
        cla.setId_clase(clase.getId_clase());
        cla.setNombre(clase.getNombre());
        cla.setDescripcion(clase.getDescripcion());
        cla.setId_sede(clase.getId_sede());
        cla.setId_profesor(clase.getId_profesor());
        cla.setFecha_inicio(clase.getFecha_inicio());
        cla.setFecha_final(clase.getFecha_final());
        cla.setCapacidad(clase.getCapacidad());

        System.out.println(cla.getFecha_inicio());
        return cla;

    }
}

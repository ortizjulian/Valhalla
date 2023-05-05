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

        listClases.add(new Clases(1, "Calistenia", "Segundo piso", 1, 1, 20, "2023/5/5 10:00",
                "2023/5/5 12:00"));
        listClases.add(new Clases(2, "Zamba", "Segundo piso", 1, 1, 20, "2023/5/5 2:00",
                "2023/5/5 4:00"));
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

package com.valhalla.valhalla.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Planes;

@RestController
@RequestMapping("/planes")
public class PlanesController {
    ArrayList<Planes> listPlanes = new ArrayList<Planes>();

    public PlanesController() {
        listPlanes.add(new Planes(1, "Guerrero",
                "Nuestro plan básico, que te permitirá acceder a la sede de tu preferencia.", 59900));
        listPlanes.add(new Planes(2, "Valkiria",
                "Nuestro plan Valkiria, te permitirá acceder a lo mejor de su rango.", 89900));
        listPlanes.add(new Planes(3, "Odín",
                "Nuestro plan Odín, es el más top. Te permite acceder a todos los beneficios posibles.", 99900));

    }

    @GetMapping()
    public ArrayList<Planes> getAllPlanes() {
        return listPlanes;
    }

}

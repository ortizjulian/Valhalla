package com.valhalla.valhalla.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Clases;
import com.valhalla.valhalla.models.Sedes;
import com.valhalla.valhalla.models.User;
import com.valhalla.valhalla.payload.response.MessageResponse;
import com.valhalla.valhalla.services.ClasesService;
import com.valhalla.valhalla.services.SedesService;
import com.valhalla.valhalla.services.UserService;

@RestController
@RequestMapping("/clases")
public class ClasesController {

    @Autowired
    private ClasesService claseService;

    @Autowired
    private UserService userService;

    @Autowired
    private SedesService sedeService;

    @GetMapping()
    public List<Clases> getAllClases() {
        return clasesService.getClases();
    }

    @PostMapping("/create")
    public ResponseEntity<?> createClass(@RequestBody Clases clase) {

        try {
            clase.setProfesor(userService.findByCedula(1));
            clase.setSede(sedeService.findByIdsedes(1));
            claseService.createClases(clase);
            return ResponseEntity.ok(new MessageResponse("Clase creada"));
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: No se pudo crear la clase\n" + e.getMessage()));
        }

    }

    @Autowired
    private ClasesService clasesService;

}
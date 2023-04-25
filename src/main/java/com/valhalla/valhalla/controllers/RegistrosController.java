package com.valhalla.valhalla.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/registros")
public class RegistrosController {

    @PostMapping("/{idPlan}")
    public boolean getBeneficiosXplan(@PathVariable long cedula) {
        return true;
    }

    @GetMapping("/{id_sede}")
    public boolean usuariosSede(@PathVariable int id_sede) {
        return true;
    }

}

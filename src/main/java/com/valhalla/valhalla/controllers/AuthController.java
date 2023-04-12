package com.valhalla.valhalla.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.User;

@RestController
@RequestMapping("/Auth")
public class AuthController {

    @GetMapping()
    public boolean login(@RequestParam long cedula, @RequestParam String contrasena) {
        long cedula1 = 10000;
        String contrasena1 = "hola";

        if (cedula == cedula1 && contrasena.equals(contrasena1)) {

            return true;
        }
        return false;

    }

    @PostMapping(value = "/Register")
    public User RegisterUser(@RequestBody User usuario) {

        return usuario;
    }

}

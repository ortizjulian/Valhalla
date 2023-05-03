package com.valhalla.valhalla.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.ERol;
import com.valhalla.valhalla.models.ESexo;
import com.valhalla.valhalla.models.Rol;
import com.valhalla.valhalla.models.Sexo;
import com.valhalla.valhalla.models.User;
import com.valhalla.valhalla.payload.response.MessageResponse;
import com.valhalla.valhalla.services.RolService;
import com.valhalla.valhalla.services.SexoService;
import com.valhalla.valhalla.services.UserService;

@RestController
@RequestMapping("/auth")

public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private RolService rolService;

    @Autowired
    private SexoService sexService;

    @GetMapping()
    public boolean login(@RequestParam long cedula, @RequestParam String contrasena) {
        long cedula1 = 10000;
        String contrasena1 = "hola";

        if (cedula == cedula1 && contrasena.equals(contrasena1)) {

            return true;
        }
        return false;

    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> RegisterUser(@RequestBody User usuario) {
        try {
            if (userService.existsByCedula(usuario.getCedula())) {
                System.out.println("Hola");
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error: Username is already taken!"));

            }

            if (userService.existsByCorreo(usuario.getCorreo())) {
                System.out.println("Hola2");
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error: Correo is already taken!"));
            }

            Rol cliente = rolService.findByName(ERol.CLIENTE);

            Sexo sexo = sexService.findByName(ESexo.fromString(usuario.getSexoFront()));
            usuario.setFechaNacimiento(new Date(0, 0, 0, 0, 0, 0));
            usuario.setSexo(sexo);
            usuario.setRol(cliente);
            userService.createUser(usuario);

            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: No se pudo registrar el usuario"));
        }

    }

}

package com.valhalla.valhalla.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.valhalla.valhalla.models.Registros;
import com.valhalla.valhalla.models.Sedes;
import com.valhalla.valhalla.models.User;
import com.valhalla.valhalla.payload.response.MessageResponse;
import com.valhalla.valhalla.repositories.SedesRepository;
import com.valhalla.valhalla.services.RegistrosService;
import com.valhalla.valhalla.services.SedesService;
import com.valhalla.valhalla.services.UserService;

import jakarta.persistence.Id;

@RestController
@RequestMapping("/registros")
public class RegistrosController {

    @Autowired
    private RegistrosService registroService;

    @Autowired
    private UserService userService;

    @Autowired
    private SedesService sedeService;

    @GetMapping()
    public List<Registros> getAllRegistros() {
        return registroService.getRegistros();
    }

    @PostMapping("/crear")
    public ResponseEntity<?> RegisterEntry(@RequestParam long cedula) {

        try {
            User usuario = userService.findByCedula(cedula);

            if (usuario == null) {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error: Usuario no encontrado"));
            }

            else {

                Registros registro = new Registros();
                new MessageResponse("Usuaio ingresado");
                registro.setId_user(usuario);
                registro.setId_sede(sedeService.findByIdsedes(1));
                registro.setFecha_hora_entrada(new Date());
                registro.setFecha_hora_salida(new Date());
                registroService.createRegistro(registro);
                return ResponseEntity.ok(new MessageResponse("Usuario ingresado"));
            }
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: No se pudo ingresar el usuario\n" + e.getMessage()));
        }
    }
}
